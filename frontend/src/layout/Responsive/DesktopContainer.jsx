import Spinner from 'components/Spinner/Spinner.component';
import Footer from 'layout/Footer';
import Nav from 'layout/Navigation';
import React, { Suspense } from 'react';
import { Container, Menu, Responsive, Segment } from 'semantic-ui-react';

import { getWidth } from './responsiveUtils';

const DesktopContainer = ({ children }) => {
  return (
    <Responsive
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      <Segment inverted textAlign="center" style={{ padding: '0' }} vertical>
        {/* This Menu serves as a placeholder to push the content down */}
        <Menu borderless attached="top" size="large" />

        <Menu borderless fixed="top" size="large">
          <Suspense fallback={<Spinner />}>
            <Nav />
          </Suspense>
        </Menu>
      </Segment>
      {children}
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </Responsive>
  );
};

export default DesktopContainer;
