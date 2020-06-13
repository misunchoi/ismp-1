import Styled from 'styled-components';

const FlexContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // TODO: Leaving this option here for now
  padding-bottom: ${props => props.padded && '32px'};
`;

export default FlexContainer;
