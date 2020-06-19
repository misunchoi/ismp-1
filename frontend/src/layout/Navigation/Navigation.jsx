import LanguageList from 'components/LanguageList/LanguageList';
import logo from 'images/ISMP_logo.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const navLinks = [
  { text: 'Mentors', i18n_key: 'mentors', link: '/mentors' },
  { text: 'Program', i18n_key: 'program', link: '/program' },
  { text: 'Blog', i18n_key: 'blog', link: '/blog-list' }
];

const AboutUsDropdown = () => {
  const { t } = useTranslation('general');

  return (
    <Dropdown
      item
      text={t('about_us')}
      style={{ alignSelf: 'center', border: 0 }}
    >
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/about">
          {t('who_we_are')}
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/leadership">
          {t('leadership')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Nav = ({ mobile, history }) => {
  const { t } = useTranslation('general');
  const currentPath = history.location.pathname;

  return (
    <>
      <Menu.Item
        as={Link}
        name="home"
        position="left"
        to="/"
        style={{ paddingLeft: '0px' }}
      >
        <img src={logo} alt="ISMP" style={{ width: '2.5em' }} />
      </Menu.Item>
      <Menu.Menu position="right">
        <AboutUsDropdown />
        {navLinks.map((nav, index) => {
          return (
            <Menu.Item
              key={nav.text + index}
              as={Link}
              name={nav.text}
              to={nav.link}
              style={{ alignSelf: 'center' }}
              active={currentPath === nav.link}
            >
              {t(nav.i18n_key)}
            </Menu.Item>
          );
        })}
        {mobile ? null : (
          <Menu.Item
            key="apply"
            as={Link}
            name="apply"
            to="/apply"
            style={{ alignSelf: 'center' }}
          >
            <Button primary size="medium">
              {t('apply_now')}
            </Button>
          </Menu.Item>
        )}
        <Menu.Item
          key="language-list"
          name="language-list"
          style={{ alignSelf: 'center', padding: 0 }}
        >
          <Dropdown.Menu>
            <LanguageList />
          </Dropdown.Menu>
        </Menu.Item>
      </Menu.Menu>
    </>
  );
};

export default withRouter(Nav);
