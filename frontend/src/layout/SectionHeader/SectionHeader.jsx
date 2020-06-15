import Header from 'layout/Header';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import { breakpoints } from 'styles/responsive';

const PaddedHeader = styled(Header)`
  ${mixins.marginBottomSm}
`;

const SectionHeader = ({ center, children }) => {
  const isPhone = useMediaQuery({ query: breakpoints.phone });
  const style = {
    textAlign: isPhone || center ? 'center' : 'left'
  };
  return (
    // Grid is only here so that padding is consistent in mobile
    <Grid stackable columns={1}>
      <Grid.Column style={style}>
        <PaddedHeader size="h2" font="sans">
          {children}
        </PaddedHeader>
      </Grid.Column>
    </Grid>
  );
};

export default SectionHeader;
