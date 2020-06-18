import ProfileCardVertical from 'components/ProfileCardVertical';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import React, { useState, useEffect } from 'react';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import Spinner from 'components/Spinner/Spinner.component';
import styled from 'styled-components';

import mentors from 'mock-data/mentors';
import mixins from '../../styles/mixins';

import { useTranslation } from 'react-i18next';
import { Grid, Select } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Mentors = ({ history }) => {
  const { t } = useTranslation('mentors');

  // Base on url - Initialize
  const search = history.location.search;
  const campusFromUrl = search.replace('?campus=', '');
  const activeCampuses = Object.keys(mentors);

  const initialCampus = activeCampuses.includes(campusFromUrl)
    ? campusFromUrl
    : 'all';
  const initialCampusArray = activeCampuses.includes(campusFromUrl)
    ? [campusFromUrl]
    : activeCampuses;

  const [campus, setCampus] = useState(initialCampus);
  const [campusArray, setCampusArray] = useState(initialCampusArray);

  // Update the campus array based on changed campus
  useEffect(() => {
    const activeCampusArray = Object.keys(mentors);
    const present = activeCampusArray.includes(campus);
    setCampusArray(present ? [campus] : activeCampusArray);
  }, [campus]);

  // Update the campus based on the url history location, in turn will update campus array
  useEffect(() => {
    const search = history.location.search;
    const campusFromUrl = search.replace('?campus=', '');
    setCampus(campusFromUrl);
  }, [history.location]);

  // Generate Campus Dropdown
  const GenerateSelect = () => {
    const campusOptions = Object.keys(mentors).map(school => {
      return { key: school, value: school, text: mentors[school].campus.name };
    });

    const allOption = {
      key: 'all',
      value: 'all',
      text: 'All Campuses'
    };

    campusOptions.unshift(allOption);

    return (
      <Select
        placeholder="Select a Campus"
        options={campusOptions}
        value={campus}
        onChange={(e, data) => {
          setCampusArray(null);
          setCampus(data.value);
          history.push(`/mentors?campus=${data.value}`);
        }}
      />
    );
  };

  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      <FlexWrapper>
        <GenerateSelect />
      </FlexWrapper>
      {campusArray === null ? (
        <Spinner />
      ) : (
        campusArray.map(school => (
          <SchoolSection
            key={school}
            school={school}
            schoolInfo={mentors[school].campus}
            mentors={mentors[school].mentors}
          />
        ))
      )}
    </PageContainer>
  );
};

const SchoolSection = ({ school, schoolInfo, mentors }) => (
  <Section id={school}>
    <SectionHeader>{schoolInfo.name}</SectionHeader>
    {/* REMOVED School description due to long scrolling, maybe do a collapse later on */}
    {/* <Grid doubling stackable columns={1}>
      <Grid.Column>
        <i>{schoolInfo.location}</i> - {schoolInfo.blurb}
      </Grid.Column>
    </Grid> */}
    <Grid doubling stackable columns={3}>
      {mentors.map(mentor => (
        <Grid.Column key={mentor.name}>
          <ProfileCardVertical mentor={mentor} />
        </Grid.Column>
      ))}
    </Grid>
  </Section>
);

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${mixins.marginBottomMd}
`;

export default withRouter(Mentors);
