import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { filter as _filter, head as _first } from 'lodash';
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

const BlogListCard = ({ blogCard }) => {
  const {
    image_url,
    blurb,
    title,
    category,
    author,
    published_date,
    blog_url,
    blog_type
  } = blogCard;

  const finalBlurb = text => {
    return text.length > 200 ? `${text.substr(0, 200)} ...` : text;
  };

  const htmlBlurb = htmlDescription => {
    const htmlArray = ReactHtmlParser(htmlDescription);
    const firstParagraphObj = _first(_filter(htmlArray, ['type', 'p']));
    const firstParaText = _first(firstParagraphObj.props.children);

    return finalBlurb(firstParaText);
  };

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
        <Link to={blog_url} color="black">
          <Title>{title}</Title>
        </Link>
        <Blurb>
          <i>
            {published_date} by {author}
          </i>{' '}
          - {htmlBlurb(blurb)}{' '}
          <Link to={blog_url}>
            <Icon name="arrow right" />
          </Link>
        </Blurb>
      </Grid.Column>
    </Grid>
  );
};

export default BlogListCard;
