"""When people apply for ISMP, these fields are stored."""
from datetime import date
from hashlib import md5, sha256
from django.conf import settings
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from mailchimp3 import MailChimp
from rest_framework.response import Response
from api.core.models import TimestampedModel
import logging

logger = logging.getLogger(__name__)


class ApplicationForm(TimestampedModel):
    """
    This model contains the information that people input when they apply.
    """
    class Meta:
        ordering = ['-id']

    gender_choices = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    grade_level_choices = (
        ('high_school', 'High School'),
        ('undergraduate', 'Undergraduate'),
        ('exchange', 'Exchange Student'),
        ('transfer', 'Transfer Student'),
        ('graduate', 'Graduate Student'),
    )
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    # on the application form, preferred name is actually listed at "english name"
    preferred_name = models.CharField(max_length=100, blank=True)
    birth_year = models.IntegerField(validators=[MaxValueValidator(9999), MinValueValidator(1000)])
    gender = models.CharField(max_length=1, choices=gender_choices)
    country_of_origin = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    grade_level = models.CharField(max_length=20, choices=grade_level_choices)
    school_name = models.CharField(max_length=100)
    school_city = models.CharField(max_length=100)
    school_state = models.CharField(max_length=100, blank=True)
    school_country = models.CharField(max_length=100)
    destination_school = models.CharField(max_length=100, blank=True)
    major = models.CharField(max_length=100)
    referral = models.CharField(max_length=100)
    additional_input = models.CharField(max_length=1000, blank=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

    def save(self, *args, **kwargs):
        pk = self.pk  # will be None if this  is a new item
        super().save(*args, **kwargs)
        logger.info("applicant saved to DB")
        if settings.USE_MAILCHIMP and not pk:
            # form a json object of the info mailchimp needs
            gender_choices_map = {
                'M': 'male',
                'F': 'female'
            }
            if 'other:' in self.referral:
                how_hear_value = 'other'
                how_other_value = self.referral.replace('other:', '')
            else:
                how_hear_value = self.referral
                how_other_value = ''

            mailchimp_client = MailChimp(
                settings.MAILCHIMP_API_KEY,
                settings.MAILCHIMP_USERNAME)
            stripped_email = self.email.strip().lower()
            utf8_email = stripped_email.encode('utf-8')
            email_hash = md5(utf8_email).hexdigest()
            email_sha256_hash = sha256(utf8_email).hexdigest()

            new_user_data = {
                'email_address': stripped_email,
                'status_if_new': 'subscribed',
                'merge_fields': {
                    'FNAME': self.first_name.title(),
                    'LNAME': self.last_name.title(),
                    'ENG_NAME': self.preferred_name,
                    'GENDER': gender_choices_map[str(self.gender)],
                    'APPLY_D': str(date.today()),
                    'BIRTHYEAR': self.birth_year,
                    'SCHOOL': self.school_name.lower(),
                    'COUNTRY': self.country_of_origin,
                    'COUNTY': self.school_state.lower(),
                    'GRADE_LVL': self.grade_level,
                    'HOW_HEAR': how_hear_value,
                    'HOW_OTHER': how_other_value,
                    'US_SCHOOL': self.destination_school.lower(),
                    'MAJOR': self.major,
                    'GA_USER_ID': email_sha256_hash
                },
            }
            # add the new user to the mailchimp list
            try:
                mailchimp_client.lists.members.create_or_update(
                    settings.MAILCHIMP_LIST_ID,
                    email_hash,  # subscriber_hash
                    new_user_data)
                logger.info("user successfully created in mailchimp. adding tags")

                tags_to_add = ['applied']
                # To add a tag, you have to send a dict with the 'name': TAG_NAME and also
                # 'status':'active'. Good luck finding this in any documentation about mailchimp3.
                tag_list = [{'name': tag_name, 'status': 'active'} for tag_name in tags_to_add]
                mailchimp_client.lists.members.tags.update(
                    settings.MAILCHIMP_LIST_ID,
                    email_hash,
                    {'tags': tag_list}
                )
                logger.info("done adding tags")
            except ValueError as value_error:
                logger.critical("ValueError in sending information to mailchimp!")
                logger.critical(str(value_error))
                return Response({
                    "status_if_new": "error",
                    "error": str(value_error)
                })
            except Exception as e:
                logger.critical("exception in sending user information to mailchimp")
                logger.critical(e)
                if e.args[0].get('title') == "Member Exists":
                    error_msg = "Member already exists"
                    logger.critical("Tried to create a user in mailchimp that already exists")
                else:
                    error_msg = "Unknown error. Please try again later."
                    logger.critical(e)
                return Response({
                    "status": "error",
                    "error": error_msg
                })


class InterestTopic(models.Model):
    """
    This model tracks interest topics which can be entered through a checklist
    Usage is create a new one for a new topic, use an existing one if it already exists
    Currently we create a new one if someone enters a topic into the other field that does not exist
    Otherwise if checklists are used or duplicate string is used, add existing topic to that
    application
    """

    topic = models.CharField(max_length=100, unique=True)
    application_form = models.ManyToManyField(ApplicationForm, related_name="interest_topics")

    def __str__(self):
        """print topic"""
        return "{}".format(self.topic)
