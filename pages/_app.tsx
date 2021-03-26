import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Global, css, ThemeProvider } from '@emotion/react';
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
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="theme-color" content={muiTheme.palette.primary.main} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

const globalStyles = css`
  html,
  body,
  #__next {
    height: 100%;
  }

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
          rgba(48, 48, 48, 0.5) 9%,
          rgba(66, 66, 66, 0.85) 100%
        ),
        url('./bg.jpeg');
      background-position: 0% 0%, center;
      background-repeat: repeat, no-repeat;
      background-size: cover, cover;
      background-attachment: scroll;
      background-color: #ffffff;
    }
  }
`;

export default MyApp;
