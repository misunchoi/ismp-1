import InstructionCard from 'components/InstructionCard/InstructionCard';
import ProgramCard from 'components/ProgramCard/ProgramCard';
import PageContainer from 'layout/PageContainer';
import PageHeader from 'layout/PageHeader';
import Section from 'layout/Section';
import SectionHeader from 'layout/SectionHeader';
import { programDetails, programInstructions } from 'mock-data/program';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

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
        <Grid doubling stackable columns={4}>
          {programInstructions.map(instruction => (
            <Grid.Column key={instruction.title}>
              <InstructionCard instruction={instruction} />
            </Grid.Column>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionHeader title="Program Details" />
        <Grid doubling stackable columns={2}>
          {programDetails.map(program => (
            <Grid.Column key={program.title}>
              <ProgramCard program={program} />
            </Grid.Column>
          ))}
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default Program;
