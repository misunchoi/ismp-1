import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import React from 'react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import TranslationParser from 'pages/ApplicationForm/TranslationParser';

const PrivacyPolicy = () => {
  const file = 'privacy-policy';

  // should match keys in file
  const sections = [
    'introduction',
    'children_under_the_age_of_13',
    'information_we_collect_about_you_and_how_we_collect_it',
    'information_you_provide_to_us',
    'information_we_collect_through_automatic_data_collection_technologies',
    'how_we_use_your_information',
    'disclosure_of_your_information',
    'california_do_not_track_disclosure',
    'using_caution_when_sharing_information_with_others',
    'data_security',
    'changes_to_our_privacy_policy'
  ];

  const Translation = TranslationParser(file);

  return (
    <PageContainer>
      <PageHeader title={Translation.generateForKey('title')} />
      <LastUpdatedDate>{Translation.generateForKey('last_modified')}</LastUpdatedDate>
      <Section>
        {Translation.generateBody(sections, SectionHeader, Description)}
      </Section>
    </PageContainer>
  );
};

const LastUpdatedDate = styled.div`
  font-style: italic;
  ${mixins.marginBottomSm}
`;

const Description = styled.p`
`

export default PrivacyPolicy;
