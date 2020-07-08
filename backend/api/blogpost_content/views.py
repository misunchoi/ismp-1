"""
These views pertain to BlogpostContent.
"""
from django.contrib.postgres.search import SearchVector
from django.db.models import Q
from django.utils import timezone
from nltk.stem import PorterStemmer
from rest_framework import filters, generics, viewsets, status
from rest_framework.response import Response
from .models import BlogpostContent
from .serializers import BlogpostContentSerializer


class ListBlogpostContentView(generics.ListAPIView):
    """
    Provides a get method handler
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer

    def get_queryset(self):
        queried_language = self.kwargs['language']
        result = BlogpostContent.objects.all()
        if queried_language:
            result = result.filter(language=queried_language)
        return result


class BlogpostContentDetailView(generics.ListAPIView):
    """
    Provides a detailed view for a specific blogpost
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer

    def get(self, request, *args, **kwargs):
        try:
            a_blogpost_content = self.queryset.get(pk=kwargs["pk"])
            return Response(BlogpostContentSerializer(a_blogpost_content).data)
        except BlogpostContent.DoesNotExist:
            return Response(
                data={
                    "message": "BlogpostContent with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )


class BlogpostContentViewSet(viewsets.ModelViewSet):  # pylint: disable=too-many-ancestors
    """
    API endpoint that allows BlogpostContents to be viewed or edited.
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['publish_at', 'id', 'title_content']
    ordering = ['-id']

    def get_queryset(self):
        """
        Get the set of BlogpostContent objects based on the search query.
        You can filter by language and blogpost explicitly (?language=en, for example).
        You can also pass in query string which will search the titles, bodies, and the
        tags associated with the blogpost.
        :return: a set of BlogpostContent
        """
        queried_author = self.request.query_params.get('author', None)
        queried_blogpost = self.request.query_params.get('blogpost', None)
        queried_blogpost_type = self.request.query_params.get('type', None)
        queried_language = self.request.query_params.get('language', None)
        queried_tag_name = self.request.query_params.get('tag', None)
        queried_topic_title = self.request.query_params.get('topic', None)
        query_text = self.request.query_params.get('query', None)
        featured = self.request.query_params.get('featured', False)
        published_only = self.request.query_params.get('published', False)
        if query_text is not None:
            word_tokens = query_text.split()
            ps = PorterStemmer()
            word = word_tokens[0]
            # search for the words of the query separately
            aggregate_query = Q(search__icontains=ps.stem(word))
            for word in word_tokens[1:]:
                stemmed_word = ps.stem(word)
                aggregate_query &= Q(search__icontains=stemmed_word)

            search_vector = SearchVector(
                'preview_text',
                'title_content',
                'blogpost__tag__name',
                'body_content',
                'author_display_name'
            )
            result = BlogpostContent.objects. \
                annotate(search=search_vector).filter(aggregate_query)
        else:
            result = BlogpostContent.objects.all()

        if queried_author is not None:
            result = result.filter(blogpost__author__id=queried_author)
        if queried_language is not None:
            result = result.filter(language=queried_language)
        if queried_blogpost is not None:
            result = result.filter(blogpost=queried_blogpost)
        if queried_blogpost_type is not None:
            result = result.filter(blogpost__type=queried_blogpost_type)
        if queried_tag_name is not None:
            result = result.filter(blogpost__tag__name=queried_tag_name)
        if queried_topic_title is not None:
            result = result.filter(blogpost__topic__title=queried_topic_title)
        if featured and featured.lower() == 'true':
            result = result.filter(blogpost__is_featured=True)
            result = result.filter(is_draft=False)
            result = result.filter(publish_at__lte=timezone.now())
        # return only results that aren't drafts unless you specifically
        # specify ?published=false
        if not (published_only and published_only.lower() == 'false'):
            result = result.filter(is_draft=False)
            result = result.filter(publish_at__lte=timezone.now())
        return result
