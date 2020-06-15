import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

// size: 'h1' | 'h2' | 'h3'
// font: 'sans' | 'serif'
// color: string
const Header = ({ size, font, color, children }) => {
  const props = {
    color,
    fontFamily: font === 'serif' ? theme.fonts.PTSerif : theme.fonts.Poppins
  };

  switch (size) {
    case 'h1':
      return <Header1 {...props}>{children}</Header1>;
    case 'h2':
      return <Header2 {...props}>{children}</Header2>;
    case 'h3':
    default:
      return <Header3 {...props}>{children}</Header3>;
  }
};

const Header1 = styled.h1`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
`;

const Header2 = styled.h2`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
`;

const Header3 = styled.h3`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
`;

export default Header;
