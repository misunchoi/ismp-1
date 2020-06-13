import Header from 'layout/Header';
import React from 'react';
import Styled from 'styled-components';
import mixins from 'styles/mixins';

const SectionHeaderContainer = Styled.div`
  ${mixins.marginBottomSm}
`;

const SectionHeader = ({ title, center }) => (
  <SectionHeaderContainer>
    <Header title={title} h2 sans center={center} />
  </SectionHeaderContainer>
);

export default SectionHeader;
