from rest_flex_fields import FlexFieldsModelSerializer
from api.blogpost.serializers import BlogpostSerializer
from .models import BlogpostContent


class BlogpostContentSerializer(FlexFieldsModelSerializer):
    """
    The serializer for blogpostcontent. Fairly basic, but has been slightly
    modified so that the blogpost within it will show the tag_set and topic_set.
    """
    # read_only must be set to true for many-to-many fields (tag_set, topic_set)
    # to show up.
    blogpost = BlogpostSerializer(read_only=True)

    class Meta:
        model = BlogpostContent
        fields = (
            'id',
            'blogpost',
            'title_content',
            'body_content',
            'author_display_name',
            'preview_text',
            'language',
            'is_draft',
            'created_at',
            'updated_at',
            'publish_at'
        )
        expandable_fields = {
            'blogpost': BlogpostSerializer
        }
        depth = 2
