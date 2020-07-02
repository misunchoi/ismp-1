import 'semantic-ui-css/semantic.min.css';

// i18n translation
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ResponsiveContainer from './layout/Responsive/ResponsiveContainer';
import Routes from './routes/Routes';
import ScrollToTop from './routes/ScrollToTop';

import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import * as serviceWorker from './utils/serviceWorker';

const tagManagerArgs = {
  gtmId: 'GTM-XXXXXX' // fill this out with your own
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      {/* Responsive Container has navigation and footer */}
      {/* Routes contain body content that will pass as children into responsive container */}
      <ScrollToTop>
        <ResponsiveContainer>
          <Routes />
        </ResponsiveContainer>
      </ScrollToTop>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
