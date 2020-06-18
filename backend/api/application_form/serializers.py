from rest_framework import serializers
from api.application_form.models import ApplicationForm, InterestTopic


class ApplicationFormSerializer(serializers.ModelSerializer):
    """Serialize an application"""

    # currently can set interest topics through post but cannot yet read (other than from db query)
    interest_topics = serializers.ListField(child=serializers.CharField(), write_only=True)

    class Meta:
        """define fields and model"""
        model = ApplicationForm
        fields = (
            'first_name',
            'last_name',
            'preferred_name',
            'birth_year',
            'gender',
            'country_of_origin',
            'email',
            'grade_level',
            'school_name',
            'school_city',
            'school_state',
            'school_country',
            'destination_school',
            'major',
            'referral',
            'additional_input',
            'interest_topics')
    
    def create(self, validated_data):
        """
        Override of serializer create
        Here we additionally create topics of interest and map them to the ApplicationForm as needed
        reading in from the interest_topics data
        """

        interest_topics = validated_data.pop('interest_topics')
        application_form = ApplicationForm.objects.create(**validated_data)

        for topic in interest_topics:
            topic_model, _created = InterestTopic.objects.get_or_create(topic=topic)
            application_form.interest_topics.add(topic_model.id)
        return application_form
