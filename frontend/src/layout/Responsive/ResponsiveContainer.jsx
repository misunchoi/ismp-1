import React from 'react';
import { useHistory } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children }) => {
  const history = useHistory();
  history.listen(location => {
    const pageViewTagManagerArgs = {
      dataLayer: {
        page: location.pathname,
        event: 'browse'
      }
    };
    TagManager.dataLayer(pageViewTagManagerArgs);
  });
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
};

export default ResponsiveContainer;
