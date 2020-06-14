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
        <SectionContent>{t('lastUpdated')}</SectionContent>
        <SectionContent>
          <Markdown>{t('intro')}</Markdown>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader title={t('applicationAndEnrollment.title')} />
        <ol>
          <SectionListItem>
            {t('applicationAndEnrollment.content1')}
          </SectionListItem>
          <SectionListItem>
            <Markdown>{t('applicationAndEnrollment.content2')}</Markdown>
          </SectionListItem>
          <SectionListItem>
            {t('applicationAndEnrollment.content3')}
          </SectionListItem>
        </ol>
      </Section>
      <Section>
        <SectionHeader title={t('mimimumAgeRequirement.title')} />
        <>{t('mimimumAgeRequirement.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('useOfLanguageAndImages.title')} />
        <>{t('useOfLanguageAndImages.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('personalRespect.title')} />
        <>{t('personalRespect.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('zeroTolerancePolicyForHarassment.title')} />
        <>{t('zeroTolerancePolicyForHarassment.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('virtualMeetings.title')} />
        <>{t('virtualMeetings.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('noAcademicCreditOrGuarantees.title')} />
        <>{t('noAcademicCreditOrGuarantees.content')}</>
      </Section>
      <Section>
        <SectionHeader title={t('emergencies.title')} />
        <>{t('emergencies.content')}</>
      </Section>
    </PageContainer>
  );
};

export default CodeOfConduct;
