import Header from 'layout/Header';
import React from 'react';
import styled from 'styled-components';
import mixins from 'styles/mixins';

const PageHeader = ({ title, description }) => (
  <Container>
    <Header size="h1" font="sans">
      {title}
    </Header>
    <Description>
      {description && (
        <Header size="h3" font="sans">
          {description}
        </Header>
      )}
    </Description>
  </Container>
);

const Container = styled.div`
  text-align: center; // For description
  ${mixins.marginBottomLg}
`;

const Description = styled.div`
  margin-top: 32px;
`;

export default PageHeader;
