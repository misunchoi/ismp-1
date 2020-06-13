import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import welcome from '../../images/welcome.jpg';
import theme from '../../styles/theme';

const Container = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

const StyledImageText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px black;
  padding: 0 13.5%;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h1};
`;

const StyledSubTitle = styled.h3`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
`;

const StyledButton = styled(Button)`
  &&& {
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.sm};
    border-radius: 8px;
    height: 3.5rem;
    width: 11rem;
  }
`;

const ApplyButton = styled(StyledButton)`
  &&& {
    background-color: ${theme.colors.purple};
    border: 1px solid ${theme.colors.purple};
    color: white;
    text-transform: uppercase;
  }
`;

const ExploreButton = styled(StyledButton)`
  &&& {
    background-color: transparent;
    border: 1px solid ${theme.colors.purple};
    color: ${theme.colors.purple};
    text-transform: uppercase;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: 3rem auto auto auto;
`;

const HeroImage = () => {
  const { t } = useTranslation('general');

  return (
    <Container>
      <StyledImage src={welcome} alt="Welcome" />
      <StyledImageText>
        <StyledTitle>{t('international_student_mentorship')}</StyledTitle>
        <StyledSubTitle>
          {t('connecting_international_students')}
        </StyledSubTitle>
        <ButtonContainer>
          <Link as={Link} to="/apply">
            <ApplyButton>{t('apply_now')}</ApplyButton>
          </Link>
          <Link as={Link} to="/about">
            <ExploreButton>{t('explore')}</ExploreButton>
          </Link>
        </ButtonContainer>
      </StyledImageText>
    </Container>
  );
};

export default HeroImage;
