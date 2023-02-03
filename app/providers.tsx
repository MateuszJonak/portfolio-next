'use client';

import React, { PropsWithChildren } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Global, css, ThemeProvider } from '@emotion/react';
import { muiTheme } from '../src/theme/muiTheme';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Global styles={globalStyles} />
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </MuiThemeProvider>
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
