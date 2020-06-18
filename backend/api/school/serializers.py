from rest_flex_fields import FlexFieldsModelSerializer
from api.mentor.serializers import MentorSerializer
from .models import School


class SchoolSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = School
        fields = (
            'id',
            'name',
            'profile_picture_url',
            'page_description',
            'director',
            'mentors'
        )
        expandable_fields = {
            'mentors': (MentorSerializer, {'many': True}),
            'director': MentorSerializer
        }
