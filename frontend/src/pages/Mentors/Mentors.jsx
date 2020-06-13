import LeadershipCard from 'components/LeadershipCard';
import FlexContainer from 'layout/FlexContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import mentors from 'mock-data/mentors';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Styled from 'styled-components';

const MentorsFlexContainer = Styled(FlexContainer)`
  padding-bottom: 32px;
`;

const Mentors = () => (
  <Section>
    <PageHeader title="Meet Our Mentors"></PageHeader>
    {Object.keys(mentors).map(school => (
      <Container>
        <h3>{school}</h3>
        <MentorsFlexContainer>
          {mentors[school].map(mentor => (
            <LeadershipCard key={mentor.name} leader={mentor} />
          ))}
        </MentorsFlexContainer>
      </Container>
    ))}
  </Section>
);

export default Mentors;
