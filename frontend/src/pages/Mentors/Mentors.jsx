import MentorCards from 'components/MentorCards/MentorCards';
import PageHeader from 'components/PageHeader';
import Section from 'layout/Section';
import React from 'react';
import {Container} from 'semantic-ui-react';

const Mentors = () => {
  return (
    <Container>
      <Section>
        <PageHeader title="Meet Our Mentors"></PageHeader>
        <MentorCards />
      </Section>
    </Container>
  );
};

export default Mentors;
