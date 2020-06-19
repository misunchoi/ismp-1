import styled from 'styled-components';
import mixins from '../../styles/mixins';
import media from '../../styles/media';

export const FlexWrapper = styled.div`
  ${mixins.flexBetween}
  flex-wrap: wrap;
`;

export const SearchFieldWrapper = styled.div`
  width: 25%;
  ${media.phone`width: 100%; padding-bottom: 15px;`};
`;

export const FilterWrapper = styled.div`
  ${media.phone`width: 100%;`};
`;

export const PaginationWrapper = styled.div`
  text-align: center;
`;
