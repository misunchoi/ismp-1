import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import media from 'styles/media';

export const Card = styled.div`
  padding: 15px 0;
`;

export const BlogPreview = styled.div`
  display: flex;
`;

export const PreviewCont = styled.div`
  width: 360px;
  position: relative;
`;

export const WebinarOnly = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 25px); // With icon width 50px
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const grayScaleImage = css`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const getWebinarStyling = props => {
  return props.gray ? grayScaleImage : null;
};

export const PreviewImg = styled.img`
  width: 100%;
  padding: 2px;
  border: 1px solid grey;

  ${getWebinarStyling}
`;

export const PreviewDescription = styled.div`
  width: 60%;
  padding: 5px 15px 5px 20px;
  ${media.phone`width: 100%; padding: 15px 0;`};
`;

export const Category = styled.div`
  font-size: ${theme.fontSizes.xs};
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.lg};
  margin-top: 5px;
`;

export const Blurb = styled.div`
  font-size: ${theme.fontSizes.p};
  margin-top: 10px;
`;
