import LanguageList from 'components/LanguageList/LanguageList';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from 'styles/theme';
import media from 'styles/media';

import { logApplyNowClick } from 'utils/google_tag_manager_helpers';

const NavLink = styled(Link)`
  font-size: 16px;
  font-family: ${theme.fonts.Poppins};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.purple};
  height: 100%;
  border-bottom: ${props =>
    props.active ? '3px solid ' + theme.colors.purple : 0};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-top: ${props => (props.active ? '4px' : 0)};

  &:hover {
    text-decoration: none;
  }

  ${media.tablet`
    color: white;
    text-align: center;
    border-bottom: none;
    height: 48px;
    width: 100%;

    &:hover {
      color: ${theme.colors.lightGrey};
      text-decoration: none;
    }
  `}
`;

const NavHover = styled.div`
  padding: 8px 16px;

  &:hover {
    background-color: ${theme.colors.lightHoverGrey};
  }

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &:hover {
      background-color: ${theme.colors.darkHoverGrey};
    }
  `}
`;

const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: ${props =>
    props.active ? '3px solid ' + theme.colors.purple : 0};

  &:hover {
    background-color: ${props => props.mobile && theme.colors.darkHoverGrey};
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 2%;
  }

  ${media.tablet`
    flex-direction: column;
  `}
`;

const ApplyNowButton = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.purple};
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${theme.fonts.Poppins};
  width: 122px;
  height: 36px;
  border-radius: 8px;
  margin: 0 20px;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightPurple};
    text-decoration: none;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;

  ${media.tablet`
    width: 100%;
    flex-direction: column;
    height: 80px;
  `}
`;

const SmIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 4px;
  cursor: pointer;

  ${media.tablet`
    width: 20px;
    height: 20px;
    margin: 6px;
  `}
`;

const WeChatIcon = styled(SmIcon)`
  width: 21px;
  height: 18px;

  ${media.tablet`
    width: 24px;
    height: 20px;
  `}
`;

const dropDownDesktop = {
  alignSelf: 'center',
  border: 0,
  color: theme.colors.purple,
  fontFamily: theme.fonts.Poppins
};

const dropDownMobile = {
  alignSelf: 'center',
  color: theme.colors.white,
  fontFamily: theme.fonts.Poppins,
  fontSize: '16px'
};

const logoStyle = {
  width: '144px',
  height: '55px',
  margin: 0
};

const logoMobileStyle = {
  width: '40px',
  height: '40px',
  margin: '10px 0'
};

const navLinks = [
  { text: 'Mentors', i18n_key: 'mentors', link: '/mentors' },
  { text: 'Program', i18n_key: 'program', link: '/program' },
  { text: 'Blog', i18n_key: 'blog', link: '/blog-list' }
];

const getHeaderIcon = name => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/header/' + name;
};

const AboutUsDropdown = ({ currentPath, mobile }) => {
  const { t } = useTranslation('general');
  let dropDownActive = ['/about', '/leadership'].includes(currentPath);

  return (
    <DropDownContainer active={dropDownActive} mobile={mobile}>
      <Dropdown
        item
        text={t('about_us')}
        style={mobile ? dropDownMobile : dropDownDesktop}
      >
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/about"
            style={{ color: theme.colors.purple }}
          >
            {t('who_we_are')}
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/leadership"
            style={{ color: theme.colors.purple }}
          >
            {t('leadership')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </DropDownContainer>
  );
};

const Nav = ({ mobile, history }) => {
  const { t } = useTranslation('general');
  const currentPath = history.location.pathname;

  return (
    <NavContainer>
      <Menu.Item
        as={Link}
        name="home"
        position={mobile ? 'center' : 'left'}
        to="/"
        style={{
          display: 'flex',
          justifyContent: mobile ? 'center' : 'flex-start'
        }}
      >
        <img
          src={
            mobile ? getHeaderIcon('ISMP_logo.png') : getHeaderIcon('ISMP.png')
          }
          alt="ISMP"
          style={mobile ? logoMobileStyle : logoStyle}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        {!mobile && (
          <AboutUsDropdown currentPath={currentPath} mobile={mobile} />
        )}
        {mobile && (
          <div>
            <NavLink to="/about" active={currentPath === '/about'}>
              <NavHover>{t('who_we_are')}</NavHover>
            </NavLink>
            <NavLink to="/leadership" active={currentPath === '/leadership'}>
              <NavHover>{t('leadership')}</NavHover>
            </NavLink>
          </div>
        )}
        {navLinks.map((nav, index) => {
          return (
            <NavLink
              key={nav.text + index}
              to={nav.link}
              style={{ alignSelf: 'center' }}
              active={currentPath === nav.link}
            >
              <NavHover>{t(nav.i18n_key)}</NavHover>
            </NavLink>
          );
        })}
        {mobile ? null : (
          <ApplyNowButton to="/apply" onClick={logApplyNowClick}>
            {t('apply_now')}
          </ApplyNowButton>
        )}
        <Menu.Item
          key="language-list"
          name="language-list"
          style={{ alignSelf: 'center', padding: 0, alignItems: 'center' }}
        >
          <Dropdown.Menu>
            <LanguageList mobile={mobile} />
          </Dropdown.Menu>
        </Menu.Item>
        <SocialMediaIcons>
          <div>
            <a
              href="https://www.facebook.com/internationalmentorship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmIcon src={getHeaderIcon('Facebook.png')} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/internationalmentorship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmIcon src={getHeaderIcon('Instagram.png')} alt="instagram" />
            </a>
          </div>
          <div>
            <WeChatIcon src={getHeaderIcon('Wechat.png')} alt="wechat" />
            <a
              href="https://www.linkedin.com/company/internationalmentorship"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmIcon src={getHeaderIcon('linkedin.png')} alt="linkedin" />
            </a>
          </div>
        </SocialMediaIcons>
      </Menu.Menu>
    </NavContainer>
  );
};

export default withRouter(Nav);
