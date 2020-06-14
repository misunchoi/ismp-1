import welcome from 'images/welcome.jpg';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';
import styled from 'styled-components';
import sizes from 'styles/sizes';
import theme from 'styles/theme';

const Container = styled.section`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.6);
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
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
`;

const MobileTitle = styled(StyledTitle)`
  font-size: 2.5rem;
`;

const StyledSubTitle = styled.h2`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  /* font-size: ${theme.fontSizes.h2}; */
`;

const MobileSubTitle = styled(StyledSubTitle)`
  font-size: 1.5rem;
`;

// const StyledButton = styled(Button)`
//   &&& {
//     font-family: ${theme.fonts.Poppins};
//     font-style: normal;
//     font-weight: normal;
//     font-size: ${theme.fontSizes.md};
//     border-radius: 8px;
//     height: 3.5rem;
//     width: 10rem;
//     padding: 0;
//   }
// `;

// const ApplyButton = styled(StyledButton)`
//   &&& {
//     background-color: ${theme.colors.purple};
//     border: 1px solid ${theme.colors.purple};
//     color: white;
//     text-transform: uppercase;
//   }
// `;

// const ExploreButton = styled(StyledButton)`
//   &&& {
//     background-color: transparent;
//     border: 1px solid ${theme.colors.purple};
//     color: ${theme.colors.purple};
//     text-transform: uppercase;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   max-width: 480px;
//   margin: 3rem auto auto auto;
// `;

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
        {/* <ButtonContainer>
          <Link as={Link} to="/apply">
            <ApplyButton>{translation('apply_now')}</ApplyButton>
          </Link>
          <Link as={Link} to="/about">
            <ExploreButton>{translation('explore')}</ExploreButton>
          </Link>
        </ButtonContainer> */}
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

        {/* Removing for Issue #156, but leaving commented */}
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

  return (
    <>
      <DesktopHero translation={t} />
      <MobileHero translation={t} />
    </>
  );
};

export default HeroImage;
