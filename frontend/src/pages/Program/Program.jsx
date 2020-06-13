import ProgramCard from 'components/ProgramCard/ProgramCard';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import programData from 'mock-data/program';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProgramContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Program = () => {
  const { t } = useTranslation('program');
  const pageHeaderProps = {
    title: t('title'),
    description: t('blurb')
  };
  return (
    <PageContainer>
      <PageHeader {...pageHeaderProps}></PageHeader>
      <Section>
        <ProgramContainer>
          {programData.map(program => {
            return <ProgramCard key={program.title} program={program} />;
          })}
        </ProgramContainer>
      </Section>
    </PageContainer>
  );
};

export default Program;
