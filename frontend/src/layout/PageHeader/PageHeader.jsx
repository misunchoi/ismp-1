import Header from 'layout/Header';
import React from 'react';
import Styled from 'styled-components';

const PageHeader = ({ title, description }) => (
  <Container>
    <Header title={title} h1 sans center />
    <Description>
      {description && <Header title={description} h3 sans center />}
    </Description>
  </Container>
);

const Container = Styled.div`
  text-align: center; // For description
  margin-bottom: 64px;
`;

const Description = Styled.div`
  margin-top: 32px;
`;

export default PageHeader;
