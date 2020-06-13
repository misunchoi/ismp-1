import React from 'react';
import MediaQuery from 'react-responsive';
import sizes from 'styles/sizes';

// iterate through the sizes and create a media template
export const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16; // 10; // 1em = 10px
  accumulator[label] = `(max-width: ${emSize}em)`; // TODO: Need min-width on these for multiple to work together
  return accumulator;
}, {});

export const Desktop = props => (
  <MediaQuery query={breakpoints.desktop}>{props.children}</MediaQuery>
);

export const Laptop = props => (
  <MediaQuery query={breakpoints.laptop}>{props.children}</MediaQuery>
);

export const Tablet = props => (
  <MediaQuery query={breakpoints.tablet}>{props.children}</MediaQuery>
);

export const Phone = props => (
  <MediaQuery query={breakpoints.phone}>{props.children}</MediaQuery>
);
