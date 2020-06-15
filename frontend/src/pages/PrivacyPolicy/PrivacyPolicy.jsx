import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import mixins from 'styles/mixins';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy');
  return (
    <PageContainer>
      <PageHeader title={t('title')} />
      <LastUpdatedDate title="poop">Last updated June 1, 2020</LastUpdatedDate>
      <Section>
        <SectionHeader>{t('introduction.title')}</SectionHeader>
        <p>{t('introduction.description')}</p>
      </Section>
    </PageContainer>
  );
};

const LastUpdatedDate = styled.div`
  font-style: italic;
  ${mixins.marginBottomSm}
`;

export default PrivacyPolicy;
