import LeadershipCard from 'components/LeadershipCard/LeadershipCard';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import leadershipData from 'mock-data/leadership';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

const Leadership = () => {
  const { t } = useTranslation('leadership');
  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      <LeadershipSection
        title={t('officers')}
        leaders={leadershipData.officers}
      />
      <LeadershipSection
        title={t('directors')}
        leaders={leadershipData.directors}
      />
    </PageContainer>
  );
};

const LeadershipSection = ({ title, leaders }) => (
  <Section>
    <SectionHeader title={title} />
    <Grid doubling stackable columns={3}>
      {leaders.map(leader => (
        <Grid.Column key={leader.name}>
          <LeadershipCard key={leader.name} leader={leader} />
        </Grid.Column>
      ))}
    </Grid>
  </Section>
);

export default Leadership;
