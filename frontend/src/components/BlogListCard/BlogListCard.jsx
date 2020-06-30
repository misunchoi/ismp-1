import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import {
  PreviewImg,
  WebinarOnly,
  Category,
  StyledLabel,
  Title,
  Blurb
} from './BlogListCard.styles';
import { logContentClickFromBlogList } from 'utils/google_tag_manager_helpers';

const BlogListCard = ({ blogCard }) => {
  const {
    image_url,
    preview_text,
    title,
    category,
    author,
    published_date,
    blog_url,
    blog_type,
    position
  } = blogCard;

  return (
    <Grid doubling stackable padded="vertically">
      <Grid.Column width={6}>
        <WebinarOnly>
          {blog_type === 'webinar' && (
            <Icon
              name="play circle"
              style={{ color: 'white', margin: 0, width: 0 }}
              size="big"
            />
          )}
        </WebinarOnly>
        <PreviewImg
          src={image_url}
          alt={title}
          gray={blog_type === 'webinar'}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Category>
          {category.map((item, index) => {
            return <StyledLabel key={index}>{item}</StyledLabel>;
          })}
        </Category>
        <Link
          to={blog_url}
          color="black"
          onClick={() =>
            logContentClickFromBlogList('blog', blogCard, position)
          }
        >
          <Title>{title}</Title>
        </Link>

        <Blurb>
          <i>
            {published_date} by {author}
          </i>{' '}
          - {preview_text}
          <Link
            to={blog_url}
            onClick={() =>
              logContentClickFromBlogList('blog', blogCard, position)
            }
          >
            <Icon name="arrow right" />
          </Link>
        </Blurb>
      </Grid.Column>
    </Grid>
  );
};

export default BlogListCard;
