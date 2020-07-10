import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { BlogPost } from 'utils/agent';
import moment from 'moment';
import fallbackBlogpostContentData from 'fallback_data/blogpostcontent.json';
import { Embed, Loader } from 'semantic-ui-react';

import styled from 'styled-components';
import media from '../../styles/media';
import sizes from '../../styles/sizes';
import RenderBlog from 'components/RenderBlog';
import PageContainer from '../../layout/PageContainer';
import theme from '../../styles/theme';

import arrowLeft from '../../images/arrow-left-purple.png';
import { logContentView } from 'utils/google_tag_manager_helpers';
import RecommendedArticles from 'components/RecommendedArticles';

const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`padding: 0 5%;`};
`;

const BlogTopic = styled.div`
  font-family: ${theme.fonts.Poppins};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;

  @media (max-width: ${sizes.phone}px) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const BlogTitle = styled.div`
  font-family: ${theme.fonts.PTSerif};
  font-size: ${theme.fontSizes.xxl};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  line-height: 84px;
  margin-top: 16px;

  @media (max-width: ${sizes.phone}px) {
    font-size: ${theme.fontSizes.lg};
    margin-top: 8px;
    line-height: 36px;
  }

  @media (min-width: ${sizes.laptop}px) {
    padding: 0 150px;
  }
`;

const BlogHomeLink = styled(Link)`
  display: flex;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.purple};
  align-items: center;

  &:hover {
    color: ${theme.colors.purple};
  }

  ${media.phone`font-size: 14px;`};

  @media (max-width: ${sizes.tablet}px) {
    margin-left: 0;
    margin-bottom: 16px;
    justify-content: center;
  }
`;

const ArrowLeft = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 16px;

  @media (max-width: ${sizes.phone}px) {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
`;

const DateAndAuthor = styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: ${sizes.phone}px) {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 36px;
    margin-top: 8px;
  }
`;

const HeaderImg = styled.img`
  width: 1050px;
  height: 590px;
  background-color: ${theme.colors.black};
  align-self: center;
  margin-bottom: 48px;
  object-fit: cover;

  @media (min-width: ${sizes.phone}px) and (max-width: ${sizes.tablet}px) {
    width: 630px;
    height: 354px;
  }

  @media (max-width: ${sizes.phone}px) {
    width: 315px;
    height: 177px;
  }
`;

const HeaderVideo = styled(Embed)`
  width: 1050px;
  height: 590px;
  align-self: center;
  margin-bottom: 48px;
`;

const BlogDataContainer = styled.div`
  margin: 0 20%;
  font-family: ${theme.fonts.Poppins};
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.PTSerif} !important;
  }
  & h1 {
    font-size: ${theme.fontSizes.xxl};
    @media (max-width: ${sizes.phone}px) {
      font-size: ${theme.fontSizes.xl};
    }
  }
  & h2 {
    font-size: ${theme.fontSizes.xl};
    @media (max-width: ${sizes.phone}px) {
      font-size: ${theme.fontSizes.lg};
    }
  }
  & h3 {
    font-size: ${theme.fontSizes.lg};
    @media (max-width: ${sizes.phone}px) {
      font-size: ${theme.fontSizes.md};
    }
  }
  & h4 {
    font-size: ${theme.fontSizes.md};
    font-weight: bold;
  }
  & p,
  div,
  span,
  a {
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.Poppins} !important;
  }

  @media (max-width: ${sizes.phone}px) {
    margin: 0 5%;
    & p,
    div,
    span,
    a {
      font-size: ${theme.fontSizes.sm};
    }
  }

  @media (min-width: ${sizes.phone}) and (max-width: ${sizes.tablet} px) {
    margin: 0 10%;
  }

  ${media.tablet`
    margin: 0 5%;
  `}
`;

const GetConnected = styled.div`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  margin-top: 64px;

  @media (min-width: ${sizes.phone}px) and (max-width: ${sizes.tablet}px) {
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: ${sizes.phone}px) {
    font-size: ${theme.fontSizes.sm};
    padding: 24px 8px;
  }
`;

const ApplyNowBtn = styled(Link)`
  width: 135px;
  height: 36px;
  background-color: ${theme.colors.yellow};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.black};
  font-weight: normal;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 48px;

  &:hover {
    color: ${theme.colors.black};
  }

  @media (max-width: ${sizes.phone}px) {
    width: 84px;
    height: 24px;
    font-size: ${theme.fontSizes.xs};
    margin-left: 36px;
  }
`;

const ErrorPageContainer = styled(PageContainer)`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  font-size: ${theme.fontSizes.xl};
  text-align: center;
  padding: 16px 0;
`;

const BlogHomeErrorLink = styled(BlogHomeLink)`
  font-size: ${theme.fontSizes.lg};
  justify-content: center;
  margin: 0;
  ${media.phone`font-size: 16px;`};
`;

const ArrowErrorIcon = styled(ArrowLeft)`
  width: 20px;
  height: 20px;
`;

const LoadingContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
`;

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.match.params.id,
      blogPostContentId: parseInt(props.match.params.id, 10),
      blogPostContent: {},
      blogPostData: {},
      blogPostExists: false,
      loadingBlogData: true,
    };
  }

  componentDidMount() {
    this.populateBlogpostData();

    // Listening for a change to the blog id, 
    // for when a new blog needs to be loaded
    // when a recommended blog article is pressed
    this.historyListener = this.props.history.listen(location => {
      const pathPieces = location.pathname.split('/');
      this.setState({ blogPostContentId: pathPieces[2] });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.populateBlogpostData();
    }
  }

  componentWillUnmount() {
    this.historyListener();
  }

  populateBlogpostData = async () => {
    try {
      await BlogPost.get(this.state.blogPostContentId).then(result => {
        this.setState({
          blogPostContent: result,
          content: result.body_content,
          blogPostData: result.blogpost,
          blogPostExists: true,
          loadingBlogData: false
        });
        logContentView(result);
      });
    } catch (error) {
      console.log('Could not load blogpost: ', error);
      // Use fallback blog data if we get no response from the API
      let fallbackBlogpostContent = fallbackBlogpostContentData.filter(
        blogpostJson => {
          return this.state.blogPostContentId === blogpostJson.id;
        }
      );
      if (fallbackBlogpostContent.length === 0) {
        this.setState({
          content: 'The requested blogpost was not found',
          blogPostExists: false,
          loadingBlogData: false
        });
      } else {
        this.setState({
          blogPostContentId: fallbackBlogpostContent[0],
          content: fallbackBlogpostContent[0]['body_content'],
          blogPostExists: true,
          loadingBlogData: false
        });
      }
    }
  };

  parseVideoLink(videoLink) {
    // Video ID is used in Embed component to determine
    // where to find the video link on YouTube
    const videoId = videoLink.includes('embed/')
      ? videoLink.split('embed/')[1]
      : videoLink.split('v=')[1];
    if (videoId.includes('&')) {
      return videoId.substr(0, '&');
    }
    return videoId;
  }

  renderHeaderMedia(headerMedia) {
    // Determine whether or not we need to render
    // an image or video for the header
    if (headerMedia.includes('youtube')) {
      const videoId = this.parseVideoLink(headerMedia);
      return (
        <HeaderVideo
          id={videoId}
          source="youtube"
          iframe={{
            allowFullscreen: true
          }}
        />
      );
    } else {
      return <HeaderImg src={headerMedia} alt="header" />;
    }
  }

  render() {
    if (this.state.loadingBlogData) {
      return (
        <LoadingContainer>
          <Loader active inline="centered">
            Loading blog...
          </Loader>
        </LoadingContainer>
      );
    }
    if (!this.state.blogPostExists) {
      return (
        <ErrorPageContainer>
          <ErrorMessage>The requested blog was not found.</ErrorMessage>
          <BlogHomeErrorLink to="/blog-list">
            <ArrowErrorIcon src={arrowLeft} alt="arrow-left" />
            Blog Home
          </BlogHomeErrorLink>
        </ErrorPageContainer>
      );
    } else {
      // Show either blog type or topic category
      const topic = this.state.blogPostData.topic_set.length > 0 
        ? this.state.blogPostData.topic_set[0].display_text
        : this.state.blogPostData.type;
      const headerMedia = this.state.blogPostData.media_url;
      return (
        <>
          <PageContainer>
            <BlogContentContainer>
              <BlogHomeLink to="/blog-list">
                <ArrowLeft src={arrowLeft} alt="arrow-left" />
                Blog Home
              </BlogHomeLink>
              <BlogTopic>
                {topic || this.state.blogPostContent.title_content}
              </BlogTopic>
              <BlogTitle>{this.state.blogPostContent.title_content}</BlogTitle>
              <DateAndAuthor>
                {moment(this.state.blogPostContent.publish_at).format(
                  'MMMM DD, YYYY'
                )}{' '}
                by {this.state.blogPostContent.author_display_name}
              </DateAndAuthor>
              {this.renderHeaderMedia(headerMedia || '')}
              <BlogDataContainer>
                <RenderBlog initialContent={this.state.content} />
              </BlogDataContainer>
            </BlogContentContainer>
          </PageContainer>
          <GetConnected>
            Get connected with a mentor today
            <ApplyNowBtn to="/apply">APPLY NOW</ApplyNowBtn>
          </GetConnected>
          <RecommendedArticles 
            topic={
              this.state.blogPostData 
              && this.state.blogPostData.topic_set.length > 0 
              && this.state.blogPostData.topic_set[0].title
            }
            currentArticle={this.state.blogPostContent.id}
          />
        </>
      );
    }
  }
}

export default withRouter(Blogpost);
