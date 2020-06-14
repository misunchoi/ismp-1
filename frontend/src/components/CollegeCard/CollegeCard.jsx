import Header from 'layout/Header';
import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';

const CollegeCard = ({ college }) => {
  const { name, abbr, imageUrl } = college;

  return (
    <Container>
      <Image alt={name + abbr + ' campus'} rounded src={imageUrl} />
      <Header title={name} h3 sans center />
    </Container>
  );
};

const Container = styled.div`
  ${mixins.containerFlexStartColumn}
`;

const Image = styled(SemanticImage)`
  ${mixins.marginBottomSm}
`;

export default CollegeCard;
