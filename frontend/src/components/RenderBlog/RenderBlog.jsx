import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const RenderBlog = ({ blogpostcontent_id, initial_content }) => {
  return <BlogContainer>{ReactHtmlParser(initial_content)}</BlogContainer>;
};

export default RenderBlog;
