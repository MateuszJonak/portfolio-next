import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const GRAY = '#424242';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: GRAY, paper: GRAY },
  },
  typography: {
    fontFamily: `${roboto.style.fontFamily}, "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 300,
    },
    h2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
    },
    h6: {
      fontWeight: 300,
    },
  },
});
