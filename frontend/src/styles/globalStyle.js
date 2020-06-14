import { createGlobalStyle } from 'styled-components';
import FontFaces from 'styles/fonts';
import media from 'styles/media';
import theme from 'styles/theme';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    // font-size: 62.5%; // Set 1rem = 10px
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    color: ${colors.black};
    line-height: 1.5;
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.md};

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  h1 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.xxl};
    ${media.phone`font-size: ${fontSizes.xl};`}
  }

  h1.serif {
    font-family: ${fonts.PTSerif};
  }

  h1.serif {
    font-family: ${fonts.PTSerif};
    font-size: ${fontSizes.xxl};
  }

  h2 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.xl};
    ${media.phone`font-size: ${fontSizes.lg};`}
  }

  h2.serif {
    font-family: ${fonts.PTSerif};
  }

  h2.serif {
    font-family: ${fonts.PTSerif};
    font-size: ${fontSizes.xl};
  }

  h3 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.lg};
    ${media.phone`font-size: ${fontSizes.md};`}
  }

  h3.serif {
    font-family: ${fonts.PTSerif};
  }

  h3.serif {
    font-family: ${fonts.PTSerif};
    font-size: ${fontSizes.lg};
  }
  
  // Because semantic is 🤦🏻‍♂️ and overrides our line-height
  p {
    line-height: 1.5;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  a {
    color: ${colors.purple};
    font-weight: 500;
  }
  a:hover {
    color: ${colors.purple};
    text-decoration-line: underline;
  }
`;

export default GlobalStyle;
