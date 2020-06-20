import styled from 'styled-components';
import mixins from '../../styles/mixins';

export const FlexWrapper = styled.div`
  ${mixins.flexBetween}
  flex-wrap: wrap;
`;

export const PaginationWrapper = styled.div`
  text-align: center;
`;
