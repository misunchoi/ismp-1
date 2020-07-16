import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Embed } from 'semantic-ui-react';
import styled from 'styled-components';
import { parseYoutubeID } from "utils/youtubeIdParser";
import { logContentClick } from "utils/google_tag_manager_helpers";

const WebinarLink = styled(Link)`
  font-weight: bold;
`;

const WebinarHighlight = ({ webinar, index }) => {
  const { t } = useTranslation(['webinar']);
  const youtubeId = parseYoutubeID(webinar.body_content);
  const blogpostUrl = "/blogpost/" + webinar.id;
  return (
    <div>
      <Embed
        aspectRatio="16:9"
        autoplay={false}
        active={true}
        icon="arrow circle down"
        id={youtubeId}
        iframe={{ allowFullScreen: true }}
        source="youtube"
      />
      <div style={{ height: '0.5rem' }} />
      <WebinarLink as={Link} to={blogpostUrl} onClick={() => logContentClick("home-webinar", webinar, index)}>
        {t('highlight')} {webinar.title_content}
      </WebinarLink>
    </div>
  );
};

export default WebinarHighlight;
