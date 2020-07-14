import React from 'react';
import { AppProps } from 'next/app';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { muiTheme } from '../src/theme/muiTheme';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const globalStyles = css`
  body {
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      pointer-events: none;
      transform: scale(1);
      background-image: linear-gradient(
          60deg,
          rgba(255, 165, 150, 0.502) 9%,
          rgba(0, 228, 255, 0.353) 100%
        ),
        url('./bg.jpg');
      background-position: 0% 0%, center;
      background-repeat: repeat, no-repeat;
      background-size: cover, cover;
      background-attachment: scroll;
      background-color: #ffffff;
    }
  }
`;

export default MyApp;
