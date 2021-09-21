import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Global,
  css,
  ThemeProvider,
  CacheProvider,
  EmotionCache,
} from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { muiTheme } from '../src/theme/muiTheme';
import createEmotionCache from '../src/misc/createEmotionCache';

export const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const apolloClient = useApollo(pageProps);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="theme-color"
          content={muiTheme.palette.background.default}
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={muiTheme}>
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <Global styles={globalStyles} />
              <Component {...pageProps} />
            </StyledEngineProvider>
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
