import styled from 'styled-components';
import theme from '../../styles/theme';
import mixins from 'styles/mixins';

import { Image as SemanticImage } from 'semantic-ui-react';

export const Container = styled.div`
  ${mixins.containerFlexStartColumn}
  ${mixins.boxShadow}

  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  overflow: hidden;

  // Full card height
  height: 100%;
`;

export const Image = styled(SemanticImage)`
  ${mixins.marginBottomSm}
`;

export const Description = styled.div`
  ${mixins.containerPaddingSm}
`;

export const Details = styled.p`
  margin-top: 12px;
`;
