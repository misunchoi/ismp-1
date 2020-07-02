import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { breakpoints } from 'styles/responsive';

const socialMediaList = [
  {
    icon: 'facebook-white.png',
    title: 'facebook',
    url: 'https://www.facebook.com/internationalstudentmp'
  },
  {
    icon: 'instagram-white.png',
    title: 'instagram',
    url: 'https://www.instagram.com/internationalstudentmp'
  },
  {
    icon: 'wechat-white.png',
    title: 'wechat',
    url: 'https://www.wechat.com/en'
  },
  {
    icon: 'linkedin-white.png',
    title: 'linkedin',
    url: 'https://www.linkedin.com/company/internationalmentorship'
  }
];

const HeaderContainer = styled.div`
  margin-top: 16px;
  margin-right: 8px;
  :last-child {
    margin-right: 0px;
  }
`;

const SmIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0 5px;
`;

const WeChatIcon = styled(SmIcon)`
  width: 30px;
`;

const getFooterIcons = name => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/footer/' + name;
};

const SocialIconList = () => {
  const isTablet = useMediaQuery({ query: breakpoints.tablet });
  const floated = isTablet ? 'left' : 'right';

  const socialMediaIconList = socialMediaList.map((social, index) => {
    return (
      <HeaderContainer key={`${social.title}_${index}`}>
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          {social.title === 'wechat' ? (
            <WeChatIcon src={getFooterIcons(social.icon)} alt={social.title} />
          ) : (
            <SmIcon src={getFooterIcons(social.icon)} alt={social.title} />
          )}
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
