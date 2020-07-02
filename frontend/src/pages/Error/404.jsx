import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';

export const NotFoundPage = () => {
  const { t } = useTranslation('mentors');
  return (
    <PageContainer>
      <PageHeader title={t('404')} description={t('Oh no! The page you are looking for cannot be found!')} /> ;
    </PageContainer>
  )
};
