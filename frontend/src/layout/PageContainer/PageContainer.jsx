import Styled from 'styled-components';
import media from 'styles/media';

const PageContainer = Styled.div`
  padding: 64px 196px;
  ${media.desktop`padding: 64px 132px;`}
  ${media.laptop`padding: 64px 108px;`}
  ${media.tablet`padding: 64px 84px;`}
  ${media.phone`padding: 64px 32px;`}
`;

export default PageContainer;
