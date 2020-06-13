import FlexContainer from 'layout/FlexContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';
import Styled from 'styled-components';
import media from 'styles/media';

const MissionStatementImage = Styled(Image)`
    ${media.laptop`width: 450px;`}
    ${media.tablet`width: 400px;`}
    ${media.phone`width: 100%;`}
    border-radius: 10px;
    height: auto;
`;

// TODO: Consider extracting this if more links pop up
const ApplyNowLink = Styled(Link)`
    font-weight: 500;
    text-decoration-line: underline;
    &:active {
      color: #2C01C5;
    }
    flex-grow: 1;
`;

const missionStatement =
  'International Student Mentorship Program is a nonprofit organization with a network of volunteer mentors across the United States. We are passionate about mentoring international students through their college and graduate school experience in America, from the admissions process all the way through graduation. Our goal is to provide international students with a mentor that can guide them through each step of college, grad school, and beyond.';

const MissionStatementContainer = Styled.div`
    ${media.laptop`width: 600px;`}
    ${media.tablet`width: 500px;`}
    ${media.phone`width: 100%;`}
    padding-bottom: 32px;
`;

const About = () => {
  // TODO: Use strings from translation files
  // const { t } = useTranslation('about');

  return (
    <Section>
      <Container>
        <PageHeader title="Who We Are"></PageHeader>
        <FlexContainer padded>
          <MissionStatementContainer>
            <h3>Mission Statement</h3>
            <p>{missionStatement}</p>
          </MissionStatementContainer>
          <MissionStatementImage
            src="https://images.squarespace-cdn.com/content/v1/5d4ce82e08242000010863a1/1566366189899-AUEJHMXX6K86JV7ET2GQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Membership_WL-9a.jpg?format=2500w"
            alt="mission statement stock photo"
          />
        </FlexContainer>
      </Container>
      <Container textAlign="center">
        <h3>Don't see your campus?</h3>
        <FlexContainer>
          <span>
            You can still apply to get connected to a mentor nearby, or request
            mentorship at your campus!
          </span>
          <ApplyNowLink>Apply Now</ApplyNowLink>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default About;
