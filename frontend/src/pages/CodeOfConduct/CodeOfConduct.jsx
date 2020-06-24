import React from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-remarkable';
import styled from 'styled-components';
import mixins from 'styles/mixins';

import PageContainer from '../../layout/PageContainer/PageContainer';
import PageHeader from '../../layout/PageHeader/PageHeader';
import Section from '../../layout/Section/Section';
import SectionHeader from '../../layout/SectionHeader/SectionHeader';

const SectionContent = styled.div`
  :not(:last-child) {
    ${mixins.marginBottomSm}
  }
`;

const SectionListItem = styled.li`
  :not(:last-child) {
    ${mixins.marginBottomSm}
  }
`;

const CodeOfConduct = () => {
  const { t } = useTranslation('code-of-conduct');

  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      <Section>
        <SectionContent>
          <LastUpdatedDate>{t('lastUpdated')}</LastUpdatedDate>
        </SectionContent>
        <SectionContent>
          <Markdown>{t('intro')}</Markdown>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>{t('applicationAndEnrollment.title')}</SectionHeader>
        <ol>
          <SectionListItem>
            {t('applicationAndEnrollment.body1')}
          </SectionListItem>
          <SectionListItem>
            <Markdown>{t('applicationAndEnrollment.body2')}</Markdown>
          </SectionListItem>
          <SectionListItem>
            {t('applicationAndEnrollment.body3')}
          </SectionListItem>
        </ol>
      </Section>
      <Section>
        <SectionHeader>{t('mimimumAgeRequirement.title')}</SectionHeader>
        <>{t('mimimumAgeRequirement.body')}</>
      </Section>
      <Section>
        <SectionHeader>{t('useOfLanguageAndImages.title')}</SectionHeader>
        <>{t('useOfLanguageAndImages.body')}</>
      </Section>
      <Section>
        <SectionHeader>{t('personalRespect.title')}</SectionHeader>
        <>{t('personalRespect.body')}</>
      </Section>
      <Section>
        <SectionHeader>
          {t('zeroTolerancePolicyForHarassment.title')}
        </SectionHeader>
        <>{t('zeroTolerancePolicyForHarassment.body')}</>
      </Section>
      <Section>
        <SectionHeader>{t('virtualMeetings.title')}</SectionHeader>
        <>{t('virtualMeetings.body')}</>
      </Section>
      <Section>
        <SectionHeader>{t('noAcademicCreditOrGuarantees.title')}</SectionHeader>
        <>{t('noAcademicCreditOrGuarantees.body')}</>
      </Section>
      <Section>
        <SectionHeader>{t('emergencies.title')}</SectionHeader>
        <>{t('emergencies.body')}</>
      </Section>
    </PageContainer>
  );
};

const LastUpdatedDate = styled.div`
  font-style: italic;
  ${mixins.marginBottomSm}
`;

export default CodeOfConduct;
