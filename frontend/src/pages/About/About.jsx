import CollegeCard from 'components/CollegeCard/CollegeCard';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import colleges from 'mock-data/colleges';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

import { logApplyNowClick } from 'utils/google_tag_manager_helpers';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      <MissionStatementSection t={t} />
      <CollegeListSection t={t} />
      <SeeYourCampusSection t={t} />
    </PageContainer>
  );
};

const MissionStatementSection = ({ t }) => (
  <Section>
    <SectionHeader>{t('mission_statement.title')}</SectionHeader>
    <Grid doubling stackable columns={2}>
      <Grid.Column>
        <p>{t('mission_statement.blurb')}</p>
      </Grid.Column>
      <Grid.Column>
        <Image
          alt="mission statement stock photo"
          rounded
          src="https://images.squarespace-cdn.com/content/v1/5d4ce82e08242000010863a1/1566366189899-AUEJHMXX6K86JV7ET2GQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Membership_WL-9a.jpg?format=2500w"
        />
      </Grid.Column>
    </Grid>
  </Section>
);

const CollegeListSection = ({ t }) => (
  <Section>
    <SectionHeader>{t('our_campuses.title')}</SectionHeader>
    <Grid doubling stackable columns={4}>
      {colleges
        .filter(college => college.active)
        .map(college => (
          <Grid.Column key={college.abbr}>
            <CollegeCard college={college} />
          </Grid.Column>
        ))}
    </Grid>
  </Section>
);

const SeeYourCampusSection = ({ t }) => (
  <Section>
    <SectionHeader center>{t('see_your_campus.title')}</SectionHeader>
    <Grid doubling stackable columns={1}>
      <Grid.Column>
        <span>{t('see_your_campus.blurb')}</span>{' '}
        <Link to="/apply" onClick={logApplyNowClick}>
          {t('apply_now')}
        </Link>
      </Grid.Column>
    </Grid>
  </Section>
);

export default About;
