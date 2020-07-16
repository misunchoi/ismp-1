import { Button, Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Section from 'layout/Section';
import PageContainer from 'layout/PageContainer/PageContainer';
import theme from 'styles/theme';

const Heading = styled.h1`
  font-size: ${theme.fontSizes.lg};
`;

const SuccessText = styled.p`
  font-size: ${theme.fontSizes.md};
`;

const ApplicationFormSuccess = () => {
  const { t } = useTranslation('application-form');

  return (
    <PageContainer>
      <Section>
        <Container text>
          <Grid stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={4} centered>
                <Icon name="check circle" size="massive" color="green" />
              </Grid.Column>
              <Grid.Column width={12} centered>
                <Heading>{t('success.title')}</Heading>
                <SuccessText>{t('success.body')}</SuccessText>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} centered>
              <Grid.Column textAlign="center">
                <Button as={Link} to="/program">
                  {t('success.program')}
                </Button>
                <Button as={Link} to="/blog-list">
                  {t('success.blog')}
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default ApplicationFormSuccess;
