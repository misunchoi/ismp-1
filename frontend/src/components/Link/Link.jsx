import { Link as ReactRouterLink } from 'react-router-dom';
import Styled from 'styled-components';

const Link = Styled(ReactRouterLink)`
    font-weight: 500;
    text-decoration-line: underline;
    &:active {
      color: #2C01C5;
    }
`;

export default Link;
