import Header from 'layout/Header';
import React from 'react';
import Styled from 'styled-components';

const SectionHeaderContainer = Styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = ({ title, center }) => (
  <SectionHeaderContainer>
    <Header title={title} h2 sans center={center} />
  </SectionHeaderContainer>
);

export default SectionHeader;
