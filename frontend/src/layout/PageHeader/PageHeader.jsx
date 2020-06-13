import React from 'react';
import { Container } from 'semantic-ui-react';
import Styled from 'styled-components';

const PageHeaderContainer = Styled(Container)`
  margin-bottom: 32px;
`;

const PageHeader = ({ title, description }) => (
  <PageHeaderContainer textAlign="center">
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </PageHeaderContainer>
);

export default PageHeader;
