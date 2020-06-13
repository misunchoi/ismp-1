import ProfileCardVertical from 'components/ProfileCardVertical';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import mentors from 'mock-data/mentors';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

const Mentors = () => {
  const { t } = useTranslation('mentors');
  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      {Object.keys(mentors).map(school => (
        <SchoolSection key={school} school={school} mentors={mentors[school]} />
      ))}
    </PageContainer>
  );
};

const SchoolSection = ({ school, mentors }) => (
  <Section>
    <SectionHeader title={school} />
    <Grid doubling stackable columns={3}>
      {mentors.map(mentor => (
        <Grid.Column key={mentor.name}>
          <ProfileCardVertical mentor={mentor} />
        </Grid.Column>
      ))}
    </Grid>
  </Section>
);

export default Mentors;
