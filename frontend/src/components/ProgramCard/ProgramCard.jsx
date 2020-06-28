import Header from 'layout/Header';
import React from 'react';

import { Container, Description, Details, Image } from './ProgramCard.styles';

const ProgramCard = ({ program, fullText }) => {
  const { headerImage, title } = program;
  const blurb = `${program.blurb.slice(0, 250)}...`;

  return (
    <Container>
      <Image alt={title + ' program picture'} src={headerImage} fluid />
      <Description>
        <Header size="h3" font="sans">
          {title}
        </Header>
        <Details>{fullText ? program.blurb : blurb}</Details>
      </Description>
    </Container>
  );
};

export default ProgramCard;
