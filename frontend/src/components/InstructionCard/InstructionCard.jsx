import Header from 'layout/Header';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Icon } from 'semantic-ui-react';

import { Container, IconWrapper, Instruction } from './InstructionCard.styles';

const InstructionCard = ({ instruction }) => {
  const { icon, title, blurbHtml } = instruction;

  return (
    <Container>
      <IconWrapper>
        <Icon circular name={icon} size="huge" inverted color="yellow" />
      </IconWrapper>
      <Header size="h3" font="sans">
        {title}
      </Header>
      <Instruction>{ReactHtmlParser(blurbHtml)}</Instruction>
    </Container>
  );
};

export default InstructionCard;
