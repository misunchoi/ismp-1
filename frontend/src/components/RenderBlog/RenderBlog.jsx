import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const BlogContainer = styled.div`
  width: 100%;
`;

const RenderBlog = ({ initialContent }) => {
  return (
    <BlogContainer>
      {ReactHtmlParser(initialContent)}
    </BlogContainer>
  )
};

export default RenderBlog;
