import React from 'react';
import TagManager from 'react-gtm-module';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';
import mixins from 'styles/mixins';

import styled from 'styled-components';
import SocialMediaIconList from 'components/SocialIconsList';
import logo from 'images/ISMP_logo.png';
import {logApplyNowClick} from 'utils/google_tag_manager_helpers';

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
    section: 'About Us',
    links: [
      { text: 'Who We Are', link: '/about' },
      { text: 'Leadership', link: '/leadership' }
    ],
    width: 3
  },
  {
    section: 'Learn',
    links: [
      { text: 'Program', link: '/program' },
      { text: 'Mentors', link: '/mentors' },
      { text: 'Blog', link: '/blog' }
    ],
    width: 3
  },
  {
    section: 'Legal',
    links: [
      { text: 'Terms of Use', link: '/terms' },
      { text: 'Privacy Policy', link: '/privacy' },
      { text: 'Code of Conduct', link: '/code-of-conduct' }
    ],
    width: 3
  },
  {
    section: 'Contact',
    links: [
      { text: 'Email Us', link: 'mailto:info@internationalmentorship.org' }
    ],
    width: 3
  }
];

const footerLinks = linkArr => {
  return linkArr.map((linkObj, index) => {
    return (
      <List.Item
        key={`${linkObj.text}_${index}`}
        href={linkObj.link}
        style={style.footerLink}
      >
        {linkObj.text}
      </List.Item>
    );
  });
};

const links = contentArr => {
  return contentArr.map((content, index) => {
    return (
      <Grid.Column width={content.width} key={index}>
        <Header
          inverted
          as="h4"
          content={content.section}
          style={style.footerContentSection}
        />
        <List link inverted>
          {footerLinks(content.links)}
        </List>
      </Grid.Column>
    );
  });
};

const PaddedSection = styled.section`
  ${mixins.responsivePadding};
`;

const Footer = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  const handleClick = () => {
    history.push('/apply');
    logApplyNowClick();
  }

  return (
    <Segment vertical style={style.footerContainer}>
      <PaddedSection>
        <Grid doubling stackable>
          <Grid.Row>
            {links(footerContent)}
            <Grid.Column width={4}>
              <Button
                as="a"
                inverted={false}
                style={style.applyNowButton}
                floated="right"
                fluid
                onClick={handleClick}
              >
                APPLY NOW
              </Button>
              <SocialMediaIconList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={5}>
              <List horizontal size="small">
                <List.Item>
                  <img src={logo} alt="ISMP" style={{ width: '53px' }} />
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
                © 2020 International Student Mentorship Program. All rights
                reserved.
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PaddedSection>
    </Segment>
  );
};

export default Footer;
