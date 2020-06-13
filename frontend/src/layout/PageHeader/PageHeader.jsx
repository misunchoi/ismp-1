import Header from 'layout/Header';
import React from 'react';
import styled from 'styled-components';
import mixins from 'styles/mixins';

const PageHeader = ({ title, description }) => (
  <Container>
    <Header title={title} h1 sans center />
    <Description>
      {description && <Header title={description} h3 sans center />}
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
