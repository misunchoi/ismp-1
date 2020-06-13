import Header from 'layout/Header';
import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';

const ProfileCardVertical = ({ mentor }) => (
  <Container>
    <Image
      alt={mentor.name + ' profile picture'}
      rounded
      src={mentor.image}
      size="medium"
    />
    <Header title={mentor.name} h3 sans left />{' '}
    {mentor.credentials.map(credential => (
      <Details>
        <Organization>{credential.organization}</Organization>
        <Title>{credential.title}</Title>
      </Details>
    ))}
  </Container>
);

const Container = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const Image = styled(SemanticImage)`
  ${mixins.marginBottomSm}
`;

const Details = styled.div`
  margin-top: 12px;
`;

const Organization = styled.div`
  font-style: italic;
  font-size: ${theme.fontSizes.sm};
`;

const Title = styled.div`
  ${mixins.marginBottomXs}
`;

export default ProfileCardVertical;
