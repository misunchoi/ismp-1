import styled from 'styled-components';
import mixins from '../../styles/mixins';

export const FlexWrapper = styled.div`
  ${mixins.flexBetween}
`;

export const SearchFieldWrapper = styled.div`
  width: 25%;
`;

export const FilterWrapper = styled.div`
  display: flex;
`;

export const PaginationWrapper = styled.div`
  text-align: center;
`;
