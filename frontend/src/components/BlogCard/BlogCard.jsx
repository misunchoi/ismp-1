import Header from 'layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image as SemanticImage } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';

const BlogCard = ({ blogPost }) => {
  const {
    title_content,
    preview_text,
    blogpost: { id, media_url, thumbnail_url }
  } = blogPost;

  return (
    <Container>
      <Image
        alt={title_content + ' blog thumbnail'}
        src={thumbnail_url || media_url}
        fluid
      />
      <Description>
        <Link to={`blogpost/${id}`}>
          <Header size="h3" font="sans">
            {title_content}
          </Header>
        </Link>
        <Details>{preview_text}</Details>
      </Description>
    </Container>
  );
};

export const Container = styled.div`
  ${mixins.flexStartColumn}
  ${mixins.boxShadow}
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
`;

export const Image = styled(SemanticImage)`
  ${mixins.marginBottomXs}
`;

export const Description = styled.div`
  ${mixins.paddingAllSm}
  ${mixins.marginBottomSm}
`;

export const Details = styled.p`
  margin-top: 12px;
`;

export default BlogCard;
