import HeroImage from 'components/HeroImage/HeroImage';
import Subscribe from 'components/Subscribe';
import WebinarHighlight from 'components/WebinarHighlight';
import TestimonialCards from 'components/TestimonialCards/TestimonialCards';
import blogpostcontentFallbackData from 'fallback_data/blogpostcontent.json';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed, Responsive } from 'semantic-ui-react';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import sizes from '../../styles/sizes';
import { Blogposts } from '../../utils/agent';
import Section from 'layout/Section';

// TODO: Just testing things out
const MentorContainer = Styled(Section)`
  padding: 1.5em 17.5%;
  background-color: ${theme.colors.yellow}
`;

const MentorTitle = Styled.h3`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
  text-transform: uppercase;
`;

const DesktopDuo = Styled(Section)`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  align-items: flex-start;
  /* margin: 2em 0; */
  padding: 0;
  padding: 0 13.5%;
`;

const MobileDuo = Styled(DesktopDuo)`
  /* grid-template-rows: 1fr 1fr; */
  grid-template-columns: 1fr;
`;

const DuoContainer = ({ children }) => {
  return (
    <>
      <Responsive as={DesktopDuo} minWidth={sizes.tablet}>
        {children}
      </Responsive>
      <Responsive as={MobileDuo} maxWidth={sizes.tablet}>
        {children}
      </Responsive>
    </>
  );
};
const SubTitle = Styled.h3`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h2};
  padding-right: .5em;
`;

const StyledParagraph = Styled.p`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.md};
  line-height: 2rem;
`;

const TitleContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 13.5%;
  align-items: baseline;
`;

const StyledLink = Styled(Link)`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.purple};
`;

const Home = () => {
  const { t } = useTranslation(['home', 'general']);

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
      <Section>
        <DuoContainer stackable>
          <div>
            <SubTitle>{t('who_section.title')}</SubTitle>
            <StyledParagraph>{t('who_section.blurb')}</StyledParagraph>
          </div>
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
        </DuoContainer>
      </Section>

      <MentorContainer>
        <MentorTitle>{t('mentor_section.title')}</MentorTitle>
        <StyledParagraph>{t('mentor_section.blurb')}</StyledParagraph>
      </MentorContainer>

      <DuoContainer>
        <div>
          <SubTitle>{t('diff_section.title')}</SubTitle>
          <StyledParagraph>{t('diff_section.blurb')}</StyledParagraph>
        </div>
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
      </DuoContainer>

      <TestimonialCards />

      <TitleContainer>
        <SubTitle>{t('webinar_highlights')}</SubTitle>
        <StyledLink to="/">{t('general:view_all')}</StyledLink>
      </TitleContainer>

      <DuoContainer style={{ marginTop: 0 }}>
        <WebinarHighlight id="Pcmwvi212jE" title="test 1" blog="" />
        <WebinarHighlight id="Pcmwvi212jE" title="test 2" blog="" />
      </DuoContainer>

      <TitleContainer>
        <SubTitle>{t('featured_blogposts')}</SubTitle>
        <StyledLink to="/">{t('general:view_all')}</StyledLink>
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
