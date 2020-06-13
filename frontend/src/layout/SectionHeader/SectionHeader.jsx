import Header from 'layout/Header';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import { breakpoints } from 'styles/responsive';

const SectionHeaderContainer = styled.div`
  ${mixins.marginBottomSm}
`;

const SectionHeader = ({ title, center }) => {
  const isPhone = useMediaQuery({ query: breakpoints.phone });
  return (
    <Grid stackable columns={1}>
      <Grid.Column>
        <SectionHeaderContainer>
          <Header title={title} h2 sans center={isPhone || center} />
        </SectionHeaderContainer>
      </Grid.Column>
    </Grid>
  );
};

export default SectionHeader;
