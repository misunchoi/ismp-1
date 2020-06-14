import React, { useState, useEffect, useCallback } from 'react';

// Components / data to build
import BlogList from '../../components/BlogList/BlogList';
import Spinner from '../../components/Spinner/Spinner.component';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import { topicFilterOptions } from './BlogListPageOptions';
import { Input, Form, Select, Button, Icon, Message } from 'semantic-ui-react';

// Utils
import { requests } from '../../utils/agent';
import { format } from 'date-fns';
import { debounce as _debounce } from 'lodash';

// Styling
import {
  FlexWrapper,
  SearchFieldWrapper,
  FilterWrapper,
  PaginationWrapper
} from './BlogListPage.styles';

const BlogSearch = ({ term }) => {
  const defaultInputState = {
    query: term ? term : '',
    topic: 'all'
  };

  // Component State
  const [searchInputs, setSearchInputs] = useState(defaultInputState);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchApiUrl, setSearchApiUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [isZeroResults, setIsZeroResults] = useState(false);
  const [resultsPagination, setResultsPagination] = useState(null);

  // REFERENCE: https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const delayedQuery = useCallback(
    _debounce(q => {
      fetchResultResponse(q, null);
    }, 500),
    []
  );

  useEffect(() => {
    delayedQuery(searchInputs);
  }, [searchInputs, delayedQuery]);

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
  const fetchResultResponse = (q, overridingUrl) => {
    setIsLoading(true);

    let finalFetchApiUrl = '';

    if (overridingUrl) {
      // TODO: Should not be hardcoded. Need to grab from environment file?
      const redundantUrlFrag = 'http://localhost:8000/api/v1/';
      finalFetchApiUrl = overridingUrl.replace(redundantUrlFrag, '');
    } else {
      const urlParam = [];
      const baseApiUrl = 'blogpostcontent/';

      if (q.query.length > 0) {
        urlParam.push(`query=${q.query}`);
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

    setSearchApiUrl(finalFetchApiUrl);

    return requests.get(finalFetchApiUrl).then(
      response => {
        // Sanitize the data array for blogListCard to consume
        const finalBlogArray = response.results.map(blog => {
          const p = blog.blogpost;

          return {
            image_url: p && p.media_url,
            thumbnail_url: p && p.thumbnail_url,
            title: blog.title_content,
            blurb: blog.body_content,
            blog_url: `/blog/${blog.id}`,
            blog_type: p && p.type,
            category: p && p.topic_set.map(topic => topic.display_text),
            author: p && p.author.user,
            published_date: format(new Date(blog.publish_at), 'MM/dd/yyyy')
          };
        });

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
          We're sorry - there was an issue with the search request.
        </Message.Header>
        <p>{msg}</p>
      </Message>
    );
  };

  const resultsNotFoundMessage = () => {
    return (
      <Message warning>
        <Message.Header>
          We're sorry - your search came up with zero results.
        </Message.Header>
        <p>
          Please try another search term or topic. 0 Results from API call:{' '}
          {searchApiUrl}.
        </p>
      </Message>
    );
  };

  return (
    <PageContainer>
      <PageHeader title="Blog Article Search Results"></PageHeader>
      <Section>
        <Form size="large">
          <FlexWrapper>
            {/* TODO IN FUTURE: Add in Autocomplete */}
            <SearchFieldWrapper>
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
            </SearchFieldWrapper>

            <FilterWrapper>
              <Form.Field
                control={Select}
                options={topicFilterOptions}
                label="Topics"
                placeholder="Topics"
                name="topic"
                onChange={handleInputChange}
                value={searchInputs.topic}
              />
            </FilterWrapper>
          </FlexWrapper>
        </Form>
      </Section>

      <Section>
        {isLoading ? (
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
