import FlexContainer from 'layout/FlexContainer';
import React from 'react';
import { Container } from 'semantic-ui-react';

import LeadershipCard from '../../components/LeadershipCard/LeadershipCard';
import Section from '../../layout/Section';
import leadershipData from './data';

const Leadership = () => {
  return (
    <Container>
      <Section>
        <h2>Leadership</h2>
        <h3>Officers</h3>
        <FlexContainer>
          {leadershipData.officers.map(officer => {
            return <LeadershipCard key={officer.name} leader={officer} />;
          })}
        </FlexContainer>
        <h3>Directors</h3>
        <FlexContainer>
          {leadershipData.directors.map(director => {
            return <LeadershipCard key={director.name} leader={director} />;
          })}
        </FlexContainer>
      </Section>
    </Container>
  );
};

export default Leadership;
