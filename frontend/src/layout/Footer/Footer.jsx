import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';
import mixins from 'styles/mixins';

import styled from 'styled-components';
import SocialMediaIconList from 'components/SocialIconsList';
import { logApplyNowClick } from 'utils/google_tag_manager_helpers';

const IsmpLogo = () => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/header/ISMP_logo.png';
};

const style = {
  footerContainer: {
    margin: '0',
    padding: '3em 0em',
    width: '100%',
    backgroundColor: '#628BF3'
  },
  footerContentSection: {
    fontFamily: 'Poppins',
    fontSize: '24px',
    lineHeight: '36px'
  },
  footerLink: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    lineHeight: '30px',
    color: 'white'
  },
  applyNowButton: {
    fontFamily: 'Poppins',
    fontSize: '20px',
    background: '#FDC82E',
    borderRadius: '8px',
    height: '75px',
    padding: '26px'
  },
  rights: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'right',
    padding: '19px 0 19px 19px'
  },
  languages: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft: '50px',
    cursor: 'pointer'
  }
};

const footerContent = [
  {
    section: 'about_us.section',
    links: [
      { text: 'about_us.who', link: '/about' },
      { text: 'about_us.leadership', link: '/leadership' }
    ],
    width: 3
  },
  {
    section: 'learn.section',
    links: [
      { text: 'learn.program', link: '/program' },
      { text: 'learn.mentors', link: '/mentors' },
      { text: 'learn.blog', link: '/blog-list' }
    ],
    width: 3
  },
  {
    section: 'legal.section',
    links: [
      { text: 'legal.terms', link: '/terms' },
      { text: 'legal.privacy', link: '/privacy' },
      { text: 'legal.code', link: '/code-of-conduct' }
    ],
    width: 3
  },
  {
    section: 'contact.section',
    links: [
      { text: 'contact.email', link: 'mailto:info@internationalmentorship.org' }
    ],
    width: 3
  }
];

const footerLinks = (t, linkArr) => {
  return linkArr.map((linkObj, index) => {
    return (
      <List.Item
        key={`${linkObj.text}_${index}`}
        href={linkObj.link}
        style={style.footerLink}
      >
        {t(linkObj.text)}
      </List.Item>
    );
  });
};

const links = (t, contentArr) => {
  return contentArr.map((content, index) => {
    return (
      <Grid.Column width={content.width} key={index}>
        <Header
          inverted
          as="h4"
          content={t(content.section)}
          style={style.footerContentSection}
        />
        <List link inverted>
          {footerLinks(t, content.links)}
        </List>
      </Grid.Column>
    );
  });
};

const PaddedSection = styled.section`
  ${mixins.responsivePadding};
`;

const Footer = () => {
  const { i18n, t } = useTranslation(['footer', 'general']);
  const history = useHistory();

  const handleClick = () => {
    history.push('/apply');
    logApplyNowClick();
  };

  return (
    <Segment vertical style={style.footerContainer}>
      <PaddedSection>
        <Grid doubling stackable>
          <Grid.Row>
            {links(t, footerContent)}
            <Grid.Column width={4}>
              <Button
                as="a"
                inverted={false}
                style={style.applyNowButton}
                floated="right"
                fluid
                onClick={handleClick}
              >
                {t('general:apply_now').toUpperCase()}
              </Button>
              <SocialMediaIconList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={5}>
              <List horizontal size="small">
                <List.Item>
                  <img src={IsmpLogo()} alt="ISMP" style={{ width: '53px' }} />
                </List.Item>
                <List.Item
                  style={style.languages}
                  onClick={() => i18n.changeLanguage('en')}
                >
                  EN
                </List.Item>
                <List.Item
                  style={style.languages}
                  onClick={() => i18n.changeLanguage('zh')}
                >
                  中文
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <div style={style.rights}>
                © {t('copyright')}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PaddedSection>
    </Segment>
  );
};

export default Footer;
