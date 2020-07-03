import Spinner from 'components/Spinner/Spinner.component';
import Footer from 'layout/Footer';
import Nav from 'layout/Navigation';
import React, { Suspense } from 'react';
import { Menu, Responsive, Segment } from 'semantic-ui-react';

import { getWidth } from './responsiveUtils';

const DesktopContainer = ({ children }) => {
  return (
    <Responsive
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      <Segment inverted style={{ padding: '0' }} vertical>
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
