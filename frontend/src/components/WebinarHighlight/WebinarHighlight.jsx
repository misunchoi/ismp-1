import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed } from 'semantic-ui-react';
import styled from 'styled-components';

const WebinarLink = styled(Link)`
  font-weight: bold;
`;

const WebinarHighlight = ({ title, id, blog }) => {
  const { t } = useTranslation(['webinar']);
  return (
    <div>
      <Embed
        aspectRatio="16:9"
        autoplay={false}
        active={true}
        icon="arrow circle down"
        id={id}
        iframe={{ allowFullScreen: true }}
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
      <div style={{ height: '0.5rem' }} />
      <WebinarLink as={Link} to={blog}>
        {t('highlight')} {title} {t('webinar')}
      </WebinarLink>
    </div>
  );
};

export default WebinarHighlight;
