import BlogCard from 'components/BlogCard';
import HeroImage from 'components/HeroImage/HeroImage';
import Subscribe from 'components/Subscribe';
import TestimonialCards from 'components/TestimonialCards/TestimonialCards';
import WebinarHighlight from 'components/WebinarHighlight';
import blogPostFallbackData from 'fallback_data/blogpostcontent.json';
import Header from 'layout/Header';
import SectionHeader from 'layout/SectionHeader';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';
import { BlogPosts } from 'utils/agent';

const Home = () => {
  const { t } = useTranslation(['home', 'general']);

  const [featuredBlogPosts, setFeaturedBlogPosts] = useState([]);

  useEffect(() => {
    const getFeaturedBlogPosts = async () => {
      await BlogPosts.getFeatured()
        .then(results => {
          setFeaturedBlogPosts(results.results);
        })
        .catch(error => {
          const featuredBlogposts = blogPostFallbackData.filter(
            blogpostContentJson => blogpostContentJson.blogpost.is_featured
          );
          setFeaturedBlogPosts(featuredBlogposts);
        });
    };
    getFeaturedBlogPosts();
  }, []);

  return (
    <>
      <HeroImage />
      <WhoAreWeSection t={t} />
      <MentorSection t={t} />
      <TestimonialCards />
      <HomeSection>
        <WebinarHighlightsSection t={t} />
        <VerticalSpacer />
        <FeaturedBlogPostsSection t={t} blogPosts={featuredBlogPosts} />
      </HomeSection>
      <Subscribe />
    </>
  );
};

const HomeSection = styled.section`
  background: ${props => props.backgroundColor};
  margin: 0;
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  ${mixins.responsivePadding};
`;

const WhoAreWeSection = ({ t }) => (
  <HomeSection>
    <SectionHeader>{t('who_section.title')}</SectionHeader>
    <Grid doubling stackable columns={2}>
      <Grid.Column>
        <p>{t('who_section.blurb')}</p>
      </Grid.Column>
      <Grid.Column>
        <Embed
          aspectRatio="16:9"
          autoplay={false}
          active={true}
          icon="arrow circle down"
          id="Pcmwvi212jE"
          iframe={{ allowFullScreen: true }}
          placeholder="/images/image-16by9.png"
          source="youtube"
        />
      </Grid.Column>
    </Grid>
  </HomeSection>
);

const MentorSection = ({ t }) => (
  <HomeSection backgroundColor={theme.colors.yellow} center>
    <SectionHeader center>{t('mentor_section.title')}</SectionHeader>
    <Grid doubling stackable columns={1}>
      <Grid.Column>
        <p>{t('mentor_section.blurb')}</p>
      </Grid.Column>
    </Grid>
  </HomeSection>
);

const WebinarHighlightsSection = ({ t }) => (
  <>
    <SectionHeaderContainer>
      <Header size="h2" font="serif">
        {t('webinar_highlights')}
      </Header>
      <HorizontalSpacer />
      <Link to="">{t('general:view_all')}</Link>
    </SectionHeaderContainer>
    <Grid doubling stackable columns={2}>
      <Grid.Column>
        <WebinarHighlight id="Pcmwvi212jE" title="test 1" blog="" />
      </Grid.Column>
      <Grid.Column>
        <WebinarHighlight id="Pcmwvi212jE" title="test 2" blog="" />
      </Grid.Column>
    </Grid>
  </>
);

const FeaturedBlogPostsSection = ({ t, blogPosts }) => (
  <>
    <SectionHeaderContainer>
      <Header size="h2" font="serif">
        {t('featured_blogposts')}
      </Header>
      <HorizontalSpacer />
      <Link to="blog-list">{t('general:view_all')}</Link>
    </SectionHeaderContainer>
    <Grid doubling stackable columns={3}>
      {blogPosts.slice(0, 3).map((blogPost, index) => (
        <Grid.Column key={blogPost.title_content}>
          <BlogCard sourcePage={'home'} blogPost={blogPost} position={index} />
        </Grid.Column>
      ))}
    </Grid>
  </>
);

const SectionHeaderContainer = styled.div`
  ${mixins.marginBottomSm}
  ${mixins.flexStart};
  align-items: baseline;
`;

const HorizontalSpacer = styled.div`
  width: 12px;
`;

// TODO: Clean this up
const VerticalSpacer = styled.div`
  height: 64px;
`;

export default Home;
