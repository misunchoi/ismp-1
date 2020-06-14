import HeroImage from 'components/HeroImage/HeroImage';
import Subscribe from 'components/Subscribe';
import blogpostcontentFallbackData from 'fallback_data/blogpostcontent.json';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed } from 'semantic-ui-react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import { Blogposts } from '../../utils/agent';

// TODO: Just testing things out
const MentorContainer = styled.div`
  padding: 1.5em 17.5%;
  background-color: ${theme.colors.darkYellow};
`;

const MentorTitle = styled.h3`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
`;

const DuoContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  align-items: flex-start;
  margin: 2em 0;
  padding: 0 13.5%;
`;

const SubTitle = styled.h3`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h2};
`;

const StyledParagraph = styled.p`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.sm};
  line-height: 2rem;
`;

const ItalizedParagraph = styled(StyledParagraph)`
  font-style: italic;
`;

const VideoPlaceholder = styled.div`
  background-color: black;
  width: 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 0 13.5%;
  align-items: baseline;
`;

const StyledLink = styled(Link)`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.purple};
  padding: 0 2rem;
`;

const Home = () => {
  const { t } = useTranslation('home');

  // console.log(useParams);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    const pullFeaturedBlogs = async () => {
      try {
        await Blogposts.getFeatured().then(results => {
          setFeaturedBlogs(results.results);
        });
      } catch (error) {
        // If the API call fails, just load blogpost
        let featuredBlogposts = blogpostcontentFallbackData.filter(
          blogpostContentJson => blogpostContentJson.blogpost.is_featured
        );
        setFeaturedBlogs(featuredBlogposts);
      }
    };
    pullFeaturedBlogs();
  }, []);

  return (
    <>
      <HeroImage />
      <DuoContainer>
        <div>
          <SubTitle>{t('who_section.title')}</SubTitle>
          <StyledParagraph>{t('who_section.blurb')}</StyledParagraph>
        </div>
        <Embed
          active={true}
          autoplay={false}
          icon="arrow circle down"
          id="Pcmwvi212jE"
          placeholder="/images/image-16by9.png"
          source="youtube"
        />
      </DuoContainer>

      <MentorContainer>
        <MentorTitle>{t('mentor_section.title')}</MentorTitle>
        <ItalizedParagraph>{t('mentor_section.blurb')}</ItalizedParagraph>
      </MentorContainer>

      <DuoContainer>
        <div>
          <SubTitle>{t('diff_section.title')}</SubTitle>
          <StyledParagraph>{t('diff_section.blurb')}</StyledParagraph>
        </div>
        <VideoPlaceholder />
      </DuoContainer>

      <TitleContainer>
        <SubTitle>Webinar Highlights</SubTitle>
        <StyledLink to="/">view all</StyledLink>
      </TitleContainer>

      <TitleContainer>
        <SubTitle>Featured Blog Articles</SubTitle>
        <StyledLink to="/">view all</StyledLink>
      </TitleContainer>

      <ul>
        {featuredBlogs.map((blog, index) => (
          <li key={index}>Title: {blog.title_content}</li>
        ))}
      </ul>
      <Subscribe />
    </>
  );
};

export default Home;
