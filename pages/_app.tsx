import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Global, css, ThemeProvider, CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { muiTheme } from '../src/theme/muiTheme';

const key = 'cv';
export const cache = createCache({ key });

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="theme-color" content={muiTheme.palette.primary.main} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={muiTheme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Global styles={globalStyles} />
              <Component {...pageProps} />
            </StylesProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </CacheProvider>
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
      );
      background-position: 0% 0%;
      background-repeat: repeat;
      background-size: cover;
      background-attachment: scroll;
    }
  }
`;

export default MyApp;
