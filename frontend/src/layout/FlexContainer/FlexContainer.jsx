import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // TODO: Leaving this option here for now
  padding-bottom: ${props => props.padded && '32px'};
`;

export default FlexContainer;
