import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { breakpoints } from 'styles/responsive';

const socialMediaList = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/internationalstudentmp',
    color: 'facebook'
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/internationalstudentmp/',
    color: 'instagram'
  },
  { icon: 'wechat', url: 'https://www.wechat.com/en', color: 'green' }
];

const HeaderContainer = styled.div`
  margin-top: 16px;
  margin-right: 8px;
  :last-child {
    margin-right: 0px;
  }
`;

const SocialIconList = ({ isHeader }) => {
  const isTablet = useMediaQuery({ query: breakpoints.tablet });
  const floated = isTablet ? 'left' : 'right';

  const socialMediaIconList = socialMediaList.map((social, index) => {
    return (
      <HeaderContainer key={`${social.icon}_${index}`}>
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          <Button
            className={`ui ${social.icon} icon button`}
            color={isHeader ? 'grey' : social.color}
            basic={isHeader}
          >
            <i className={`${social.icon} icon`}></i>
          </Button>
        </a>
      </HeaderContainer>
    );
  });

  return (
    <Button.Group horizontal="true" floated={floated}>
      {socialMediaIconList}
    </Button.Group>
  );
};

export default SocialIconList;
