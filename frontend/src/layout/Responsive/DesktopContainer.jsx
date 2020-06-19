import Spinner from 'components/Spinner/Spinner.component';
import Footer from 'layout/Footer';
import Nav from 'layout/Navigation';
import React, { Suspense, useState } from 'react';
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react';

import { getWidth } from './responsiveUtils';

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(null);

  const hideFixedMenu = () => {
    setFixed(false);
  };

  const showFixedMenu = () => {
    setFixed(true);
  };

  return (
    <Responsive
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment inverted textAlign="center" style={{ padding: '0' }} vertical>
          <Menu
            borderless
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Suspense fallback={<Spinner />}>
                <Nav />
              </Suspense>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </Responsive>
  );
};

export default DesktopContainer;
