import { Responsive } from 'semantic-ui-react';

export const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export const isMobileWidth = () => {
  return getWidth() <= Responsive.onlyMobile.maxWidth;
}
