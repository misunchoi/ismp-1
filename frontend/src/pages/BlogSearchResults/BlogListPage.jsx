import React, { useState, useEffect } from 'react';

// Components / data to build
import BlogList from 'components/BlogList/BlogList';
import Spinner from 'components/Spinner/Spinner.component';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import { topicFilterOptions } from './BlogListPageOptions';
import {
  Input,
  Form,
  Select,
  Button,
  Icon,
  Message,
  Grid
} from 'semantic-ui-react';

// Utils
import { requests } from 'utils/agent';
import { logContentList } from 'utils/google_tag_manager_helpers';
import { format } from 'date-fns';
import { useDebounce } from 'use-debounce';

// Styling
import { FlexWrapper, PaginationWrapper } from './BlogListPage.styles';

const BlogSearch = (props) => {

  const defaultInputState = {
    query: props.location.state && props.location.state.term ? props.location.state.term : '',
    topic: 'all',
    type: props.location.state && props.location.state.type ? props.location.state.type : 'all'
  };

  // Component State
  const [searchInputs, setSearchInputs] = useState(defaultInputState);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isZeroResults, setIsZeroResults] = useState(false);
  const [resultsPagination, setResultsPagination] = useState(null);

  const [debouncedSearchInputs] = useDebounce(searchInputs, 500);
  useEffect(() => {
    fetchResultResponse(debouncedSearchInputs, null);
  }, [debouncedSearchInputs]);

  const handleInputChange = (e, data) => {
    setSearchInputs(searchInputs => ({
      ...searchInputs,
      [data.name]: data.value
    }));
  };

  const handleSubmit = e => {
    if (e.key === 'Enter') {
      fetchResultResponse(searchInputs, null);
    }
  };

  // q = searchInputs (state)
  const fetchResultResponse = (q, nextPageUrl) => {
    setIsLoading(true);

    let finalFetchApiUrl = '';

    if (nextPageUrl) {
      const matchPage = nextPageUrl.match(/page=(.*)/);
      const pageNumber = matchPage && matchPage[0];
      finalFetchApiUrl = `blogpostcontent/?${pageNumber}`;
    } else {
      const urlParam = [];
      const baseApiUrl = 'blogpostcontent/';

      if (q.query.length > 0) {
        urlParam.push(`query=${q.query}`);
      }

      // filter type by blogpost or webinar if specified
      if (q.type !== 'all') {
        urlParam.push(`type=${q.type}`);
      }

      if (q.topic !== 'all') {
        urlParam.push(`topic=${q.topic}`);
      }

      const comboParams = urlParam.join('&');

      // Url build from searchInputs params
      const fetchApiUrl =
        comboParams.length > 0 ? `${baseApiUrl}?${comboParams}` : baseApiUrl;

      finalFetchApiUrl = fetchApiUrl;
    }

    return requests.get(finalFetchApiUrl).then(
      response => {
        // Sanitize the data array for blogListCard to consume
        const finalBlogArray = response.results.map((blog, index) => {
          const p = blog.blogpost;

          return {
            image_url: p && p.media_url,
            thumbnail_url: p && p.thumbnail_url,
            title: blog.title_content,
            preview_text: blog.preview_text,
            blog_url: `/blogpost/${blog.id}`,
            blog_type: p && p.type,
            category: p && p.topic_set.map(topic => topic.display_text),
            author: blog.author_display_name,
            published_date: format(new Date(blog.publish_at), 'MM/dd/yyyy'),
            updated_at: format(new Date(blog.updated_at), 'MM/dd/yyyy'),
            position: index,
            id: blog.id,
            type: blog.blogpost.type
          };
        });
        // push information about the blogposts to the dataLayer
        logContentList(response.results);

        setIsZeroResults(response.results.length === 0);
        setErrorMsg(null);
        setSearchResults(finalBlogArray);
        setResultsPagination({
          total: response.count,
          countOnPage: response.results.length,
          prevPageApiUrl: response.previous,
          nextPageApiUrl: response.next,
          hidePagination: !response.next && !response.previous
        });
        setIsLoading(false);
      },
      error => {
        const errorObj = error.response;
        setErrorMsg(`${errorObj ? errorObj.error : error}`);
        setIsLoading(false);
      }
    );
  };

  const errorMessage = msg => {
    return (
      <Message negative>
        <Message.Header>
          We're sorry - there was an issue with the search request. Please try
          again.
        </Message.Header>
        <p>{msg}</p>
      </Message>
    );
  };

  const resultsNotFoundMessage = () => {
    return (
      <Message warning>
        <Message.Header>
          Sorry, we couldn't find any results matching "
          {debouncedSearchInputs.query}"
        </Message.Header>
        <p>Please try another search term or try selecting a topic instead</p>
      </Message>
    );
  };

  return (
    <PageContainer>
      <PageHeader title="Blogs"></PageHeader>
      <Section>
        <Form size="large">
          <Grid doubling stackable padded="vertically">
            {/* TODO IN FUTURE: Add in Autocomplete */}
            <Grid.Column width={5} floated="left">
              <Form.Field
                id="form-input-control-search-term"
                control={Input}
                placeholder="Search..."
                label="Search"
                name="query"
                icon="search"
                onKeyPress={handleSubmit}
                type="text"
                onChange={handleInputChange}
                value={searchInputs.query}
              />
            </Grid.Column>

            <Grid.Column width={5}>
              <Form.Field
                control={Select}
                options={topicFilterOptions}
                label="Topics"
                placeholder="Topics"
                name="topic"
                onChange={handleInputChange}
                value={searchInputs.topic}
              />
            </Grid.Column>
          </Grid>
        </Form>
      </Section>

      <Section>
        {isLoading || searchResults === null ? (
          <Spinner />
        ) : errorMsg ? (
          errorMessage(errorMsg)
        ) : isZeroResults ? (
          resultsNotFoundMessage()
        ) : (
          <>
            {resultsPagination && (
              <FlexWrapper>
                <p>
                  Viewing {resultsPagination.countOnPage} out of{' '}
                  {resultsPagination.total} total results
                </p>

                {!resultsPagination.hidePagination && (
                  <PaginationWrapper>
                    <Button
                      icon
                      labelPosition="left"
                      disabled={resultsPagination.prevPageApiUrl === null}
                      onClick={() =>
                        fetchResultResponse(
                          null,
                          resultsPagination.prevPageApiUrl
                        )
                      }
                    >
                      <Icon name="left arrow" />
                      Previous Page
                    </Button>
                    <Button
                      icon
                      labelPosition="right"
                      disabled={resultsPagination.nextPageApiUrl === null}
                      onClick={() =>
                        fetchResultResponse(
                          null,
                          resultsPagination.nextPageApiUrl
                        )
                      }
                    >
                      Next Page
                      <Icon name="right arrow" />
                    </Button>
                  </PaginationWrapper>
                )}
              </FlexWrapper>
            )}
            <BlogList blogList={searchResults} />
          </>
        )}
      </Section>
    </PageContainer>
  );
};

export default BlogSearch;
