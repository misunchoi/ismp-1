import { Image as SemanticImage } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';

export const Container = styled.div`
  ${mixins.flexStartColumn}
  ${mixins.boxShadow}

  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  overflow: hidden;

  // Full card height
  height: 100%;
`;

export const Image = styled(SemanticImage)`
  ${mixins.marginBottomXs}
`;

export const Description = styled.div`
  ${mixins.paddingAllSm}
  ${mixins.marginBottomSm}
`;

export const Details = styled.p`
  margin-top: 12px;
`;
