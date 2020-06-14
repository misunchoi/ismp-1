import React from 'react';
import Header from 'layout/Header';

import { Container, Description, Details, Image } from './ProgramCard.styles';

const ProgramCard = ({ program }) => {
  const { headerImage, title, blurb } = program;

  return (
    <Container>
      <Image alt={title + ' program picture'} src={headerImage} fluid />
      <Description>
        <Header title={title} h3 sans left />
        <Details>{blurb}</Details>
      </Description>
    </Container>
  );
};

export default ProgramCard;
