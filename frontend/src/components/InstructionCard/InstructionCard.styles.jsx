import styled from 'styled-components';
import mixins from 'styles/mixins';

export const Container = styled.div`
  ${mixins.containerFlexStartColumn}

  text-align: center;
`;

export const IconWrapper = styled.div`
  ${mixins.marginBottomSm}
`;

export const Instruction = styled.div`
  ${mixins.containerPaddingSm}

  flex-wrap: wrap;
`;
