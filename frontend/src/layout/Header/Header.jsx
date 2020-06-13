import React from 'react';
import Styled from 'styled-components';

const HeaderContainer = Styled.div`
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

// Ugly, but hey it keeps everything else neat 🤷🏻‍♂️
const Header = ({ title, h1, h2, h3, serif, sans, left, center }) => {
  const className = serif ? 'serif' : 'sans';
  return (
    <HeaderContainer serif={serif} sans={sans} left={left} center={center}>
      {h1 ? (
        <h1 className={className}>{title}</h1>
      ) : h2 ? (
        <h2 className={className}>{title}</h2>
      ) : (
        <h3 className={className}>{title}</h3>
      )}
    </HeaderContainer>
  );
};

export default Header;
