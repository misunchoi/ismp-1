import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import {
  Card,
  BlogPreview,
  PreviewCont,
  PreviewImg,
  WebinarOnly,
  PreviewDescription,
  Category,
  Title,
  Blurb
} from './BlogListCard.styles';

const BlogListCard = ({ blogCard }) => {
  const {
    image_url,
    preview_text,
    title,
    category,
    author,
    published_date,
    blog_url,
    blog_type
  } = blogCard;

  return (
    <Card>
      <BlogPreview>
        <PreviewCont>
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
        </PreviewCont>
        <PreviewDescription>
          <Category>
            {category.map((item, index) => {
              return <Label key={index}>{item}</Label>;
            })}
          </Category>
          <Link to={blog_url} color="black">
            <Title>{title}</Title>
          </Link>
          <Blurb>
            <i>
              {published_date} by {author}
            </i>{' '}
            - {preview_text}
            <Link to={blog_url}>
              <Icon name="arrow right" />
            </Link>
          </Blurb>
        </PreviewDescription>
      </BlogPreview>
    </Card>
  );
};

export default BlogListCard;
