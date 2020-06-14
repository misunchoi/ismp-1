import { css } from 'styled-components';

import media from './media';
import theme from './theme';

const { colors } = theme;

const mixins = {
  responsivePadding: css`
    padding-left: 196px;
    padding-right: 196px;
    ${media.wide`
      padding-left: 196px;
      padding-right: 196px;
    `}
    ${media.retina`
      padding-left: 196px;
      padding-right: 196px;
    `}
    ${media.desktop`
      padding-left: 132px;
      padding-right: 132px;
    `}
    ${media.laptop`
      padding-left: 108px;
      padding-right: 108px;
    `}
    ${media.tablet`
      padding-left 84px;
      padding-right: 84px;
    `}
    ${media.phone`
      padding-left: 32px;
      padding-right: 32px;
    `}
  `,

  paddingAllSm: css`
    padding: 24px;
  `,

  marginBottomXs: css`
    margin-bottom: 12px;
  `,

  marginBottomSm: css`
    margin-bottom: 24px;
  `,

  marginBottomMd: css`
    margin-bottom: 32px;
  `,

  marginBottomLg: css`
    margin-bottom: 64px;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  flexStartColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.purple};
      outline: 0;
    }

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;

    &:active {
      color: ${colors.purple};
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.purple};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.purple};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.purple} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.purple};
      transition: ${theme.transition};
      opacity: 0.5;
    }

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    text-decoration-line: underline;
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.laptop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phone`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.darkGrey};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.darkGrey};
    }
  `
};

export default mixins;
