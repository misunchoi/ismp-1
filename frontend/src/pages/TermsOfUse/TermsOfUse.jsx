import PageContainer from 'layout/PageContainer';
import React from 'react';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import styled from 'styled-components';
import TranslationParser from '../ApplicationForm/TranslationParser';
import mixins from 'styles/mixins';

const TermsOfUse = () => {
  const Translation = TranslationParser('terms-of-use')

  const sections = [
    'acceptance_of_the_terms_of_use',
    'changes_to_the_terms_of_use',
    'accessing_the_website_and_account_security',
    'intellectual_property_rights',
    'prohibited_uses',
    'user_contributions',
    'monitoring_and_enforcement',
    'content_standards',
    'copyright_infringement',
    'reliance_on_information_posted',
    'disclaimer_of_warranties',
    'limitation_on_liability',
    'indemnification',
    'governing_law_jurisdiction_and_class_action_waiver',
    'waiver_and_severability',
    'entire_agreement',
  ];

  return (
    <PageContainer>
      <PageHeader title={Translation.generateForKey('title')} />
      <LastUpdatedDate>{Translation.generateForKey('last_modified')}</LastUpdatedDate>
      <Section>
        {Translation.generateForKey('note')}
        <br />
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
`;

export default TermsOfUse;
