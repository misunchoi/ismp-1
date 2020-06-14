import styled from 'styled-components';
import mixins from 'styles/mixins';

export const Container = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  ${mixins.marginBottomSm}
`;

export const Instruction = styled.div`
  flex-wrap: wrap;
  ${mixins.paddingAllSm}
`;
