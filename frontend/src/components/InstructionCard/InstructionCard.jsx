import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Header from 'layout/Header';
import { Icon } from 'semantic-ui-react';

import { Container, Instruction, IconWrapper } from './InstructionCard.styles';

const InstructionCard = ({ instruction }) => {
  const { icon, title, blurbHtml } = instruction;

  return (
    <Container>
      <IconWrapper>
        <Icon circular name={icon} size="huge" inverted color="yellow" />
      </IconWrapper>
      <Header title={title} h3 sans center />
      <Instruction>{ReactHtmlParser(blurbHtml)}</Instruction>
    </Container>
  );
};

export default InstructionCard;
