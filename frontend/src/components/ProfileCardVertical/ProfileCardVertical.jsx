import Header from 'layout/Header';
import React from 'react';
import { Image as SemanticImage, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';

const ProfileCardVertical = ({ mentor, showRole }) => (
  <Container>
    <Image
      alt={mentor.name + ' profile picture'}
      rounded
      src={mentor.image}
      size="medium"
    />
    {showRole && mentor.title && <Role>{mentor.title}</Role>}
    <Header size="h3" font="sans">
      {mentor.name}
    </Header>
    <CurrentJob>
      <Company>{mentor.current_job.company}</Company>
      <Title>
        {mentor.current_job.position}{' '}
        {mentor.linkedin_url && (
          <a
            href={mentor.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" color="blue" />
          </a>
        )}
        {mentor.staff_url && (
          <a href={mentor.staff_url} target="_blank" rel="noopener noreferrer">
            <Icon name="linkify" color="blue" />
          </a>
        )}
      </Title>
    </CurrentJob>
    {mentor.credentials.map(credential => (
      <Details key={credential.title}>
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

const Role = styled.div`
  font-family: ${theme.fonts.PTSerif};
  font-style: italic;
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

const Company = styled.div`
  font-style: italic;
  font-size: ${theme.fontSizes.sm};
`;

const CurrentJob = styled.div`
  margin-top: 10px;
  ${mixins.marginBottomSm}
`;

export default ProfileCardVertical;
