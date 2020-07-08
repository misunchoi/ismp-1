from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from api.blogpost.models import Blogpost
from api.authentication.models import User
from api.blogpost_content.models import BlogpostContent
from api.blogpost_content.serializers import BlogpostContentSerializer


class BaseViewTest(APITestCase):

    client = APIClient()

    @staticmethod
    def create_blogpost(media_url="", author=None, is_featured=False, type='blogpost'):
        Blogpost.objects.create(
            media_url=media_url,
            author=author,
            is_featured=is_featured,
            type=type)

    @staticmethod
    def create_blogpost_content(
            language="en",
            blogpost=None,
            title_content="",
            body_content="",
            is_draft=False,
            preview_text="",
            author_display_name="",
            publish_at=None
    ):
        if blogpost:
            BlogpostContent.objects.create(language=language,
                                           blogpost=blogpost,
                                           title_content=title_content,
                                           body_content=body_content,
                                           preview_text=preview_text,
                                           author_display_name=author_display_name,
                                           is_draft=is_draft
                                           )

    def setUp(self):
        # add test data
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile
        self.create_blogpost(media_url="youtube.com", author=self.profile)
        valid_blogpost = Blogpost.objects.get(author=self.profile)
        self.created_blog_id = valid_blogpost.id
        self.create_blogpost_content(
            "en",
            valid_blogpost,
            "title",
            "body content",
            publish_at="2020-01-02T15:40:00Z"
        )
        self.create_blogpost_content(
            "cn",
            valid_blogpost,
            "zhongwentitle",
            "zhe shi zhongwenbodycontent",
            publish_at="2020-01-02T15:40:00Z"
        )


class GetByQueryParamTest(BaseViewTest):
    def setUp(self):
        # add test data
        self.BLOGPOSTCONTENT_URL = "/api/v1/blogpostcontent/"
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.user2 = User.objects.create_user(username="test2",
                                              email="test2@gmail.com",
                                              password="password2")
        self.profile = self.user.profile
        self.profile2 = self.user2.profile
        self.valid_blogpost = Blogpost.objects.create(
            media_url="youtube.com",
            author=self.profile,
            is_featured=False,
            type='webinar')
        self.create_blogpost(media_url="google.com", author=self.profile2, is_featured=True)
        # valid_blogpost = Blogpost.objects.get(author=self.profile)
        valid_blogpost2 = Blogpost.objects.get(author=self.profile2)
        self.created_blog_id = self.valid_blogpost.id
        self.bpc1 = BlogpostContent.objects.create(
            language="en",
            blogpost=self.valid_blogpost,
            title_content="title",
            body_content="body",
            author_display_name="bobby tables",
            is_draft=False,
            publish_at="2020-01-02T15:40:00Z"
        )
        self.bpc1_draft = BlogpostContent.objects.create(
            language="not en",
            blogpost=self.valid_blogpost,
            title_content="not title",
            body_content="not body",
            author_display_name="bobby tables",
            is_draft=True
        )
        self.bpc2 = BlogpostContent.objects.create(
            language="cn",
            blogpost=valid_blogpost2,
            title_content="zhongwentitle",
            body_content="zhe shi zhongwenbodycontent",
            author_display_name="zhongguoren",
            preview_text="wo shi previewtext",
            is_draft=False,
            publish_at="2020-01-02T15:40:00Z"
        )

    def test_incomplete_match(self):
        """
        This test ensures that even if a query is not a complete title or body
        content a match will occur (even if the query is not a full word).
        :return:
        """
        response = self.client.get(self.BLOGPOSTCONTENT_URL, {'query': 'zhongwe'}, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)

    def test_word_stemming(self):
        """
        This tests that the query gets stemmed before being passed to the db query.
        If this doesn't work, queries that end with 's' 'ing', etc will not work.
        :return:
        """
        response = self.client.get(
            self.BLOGPOSTCONTENT_URL, {'query': 'zhongguorens'}, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)

    def test_published_only(self):
        """
        Tests filtering out drafts. This will happen by default.
        :return: nothing
        """
        response = self.client.get(self.BLOGPOSTCONTENT_URL, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)
        self.assertEqual(len(response.data['results']), 2)

    def test_return_published_and_draft(self):
        """
        Tests returning both published blogpostcontents and drafts.
        :return: nothing
        """
        response = self.client.get(self.BLOGPOSTCONTENT_URL, {'published': 'false'}, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)
        self.assertEqual(len(response.data['results']), 3)

    def test_featured_only(self):
        """
        Tests getting featured blogpostcontents only.
        :return: nothing
        """
        response = self.client.get(self.BLOGPOSTCONTENT_URL, {'featured': 'true'}, format='json')
        self.assertEqual(len(response.data['results']), 1)

    def test_get_by_author(self):
        """
        Tests filtering by author.
        :return: nothing
        """
        response = self.client.get(
            self.BLOGPOSTCONTENT_URL, {"author": self.profile2.id}, format='json')
        self.assertEqual(len(response.data['results']), 1)

    def test_webinar_only(self):
        """
        Tests getting only blogpostcontents that correspond to webinar-type blogposts.
        :return: nothing
        """
        blogpost_response = self.client.get("/api/v1/blogpost/", {"type": "webinar"}, format='json')
        self.assertEqual(len(blogpost_response.data['results']), 1)
        response = self.client.get(self.BLOGPOSTCONTENT_URL, {'type': 'webinar'}, format='json')
        self.assertEqual(len(response.data['results']), 1)
