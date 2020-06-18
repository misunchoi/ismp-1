from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers
from api.blogpost.models import Blogpost, Tag, Topic


class BlogpostSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Blogpost
        fields = (
            'id',
            'media_url',
            'thumbnail_url',
            'author',
            'type',
            'is_featured',
            'type',
            'topic_set',
            'tag_set'
        )
        depth = 1


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    blogpost = BlogpostSerializer(many=True, read_only=True)

    class Meta:
        model = Topic
        fields = '__all__'
