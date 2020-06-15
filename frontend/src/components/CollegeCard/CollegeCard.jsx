import Header from 'layout/Header';
import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import styled from 'styled-components';

const CollegeCard = ({ college }) => {
  const { name, abbr, imageUrl } = college;

  return (
    <Container>
      <Image alt={name + abbr + ' campus'} rounded src={imageUrl} />
      <Header size="h3" font="sans">
        {name}
      </Header>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Image = styled(SemanticImage)`
  margin-bottom: -12px;
`;

export default CollegeCard;
