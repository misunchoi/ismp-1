import React from 'react';
import welcome from '../../images/welcome.jpg';
import Styled from 'styled-components';
import { Button, Responsive } from 'semantic-ui-react';
import theme from '../../styles/theme';
import sizes from '../../styles/sizes';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from 'layout/Section';

const Container = Styled(Section)`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const StyledImage = Styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.6);
`;

const StyledImageText = Styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
`;

const StyledTitle = Styled.h1`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
`;

const MobileTitle = Styled(StyledTitle)`
  font-size: 2.5rem;
`;

const StyledSubTitle = Styled.h2`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  /* font-size: ${theme.fontSizes.h2}; */
`;

const MobileSubTitle = Styled(StyledSubTitle)`
  font-size: 1.5rem;
`;

const StyledButton = Styled(Button)`
  &&& {
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.md};
    border-radius: 8px;
    height: 3.5rem;
    width: 10rem;
    padding: 0;
  }
`;

const ApplyButton = Styled(StyledButton)`
  &&& {
    background-color: ${theme.colors.purple};
    border: 1px solid ${theme.colors.purple};
    color: white;
    text-transform: uppercase;
  }
`;

const MobileApply = Styled(ApplyButton)`
  width: 7rem;
  font-size: 1rem;
`;

const ExploreButton = Styled(StyledButton)`
  &&&{
    background-color: transparent;
    border: 1px solid ${theme.colors.purple};
    color: ${theme.colors.purple};
    text-transform: uppercase;
  }
`;

const MobileExplore = Styled(ExploreButton)`
  width: 7rem;
  font-size: 1rem;
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 480px;
  margin: 3rem auto auto auto;
`;

const DesktopHero = ({ translation }) => {
  return (
    <Responsive as={Container} minWidth={sizes.phone}>
      <StyledImage src={welcome} alt="Welcome" />
      <StyledImageText>
        <StyledTitle>
          {translation('international_student_mentorship')}
        </StyledTitle>
        <StyledSubTitle>
          {translation('connecting_international_students')}
        </StyledSubTitle>
        <ButtonContainer>
          <Link as={Link} to="/apply">
            <ApplyButton>{translation('apply_now')}</ApplyButton>
          </Link>
          <Link as={Link} to="/about">
            <ExploreButton>{translation('explore')}</ExploreButton>
          </Link>
        </ButtonContainer>
      </StyledImageText>
    </Responsive>
  );
};

const MobileHero = ({ translation }) => {
  return (
    <Responsive as={Container} maxWidth={sizes.phone}>
      <StyledImage src={welcome} alt="Welcome" />

      <StyledImageText>
        <MobileTitle>
          {translation('international_student_mentorship')}
        </MobileTitle>
        <MobileSubTitle>
          {translation('connecting_international_students')}{' '}
        </MobileSubTitle>

        {/* <ButtonContainer>
          <Link as={Link} to="/application-form">
            <MobileApply>{translation('apply_now')}</MobileApply>
          </Link>

          <Link as={Link} to="/about">
            <MobileExplore>{translation('explore')}</MobileExplore>
          </Link>
        </ButtonContainer> */}
      </StyledImageText>
    </Responsive>
  );
};

const HeroImage = () => {
  const { t } = useTranslation('general');
  console.log(t);

  return (
    <>
      <DesktopHero translation={t} />
      <MobileHero translation={t} />
    </>
  );
};

export default HeroImage;
