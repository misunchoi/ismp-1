import styled from 'styled-components';
import mixins from 'styles/mixins';

const PageContainer = styled.div`
  flex: 1 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  ${mixins.responsivePadding}
`;

export default PageContainer;
