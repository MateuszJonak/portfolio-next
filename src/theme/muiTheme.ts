import { createTheme } from '@mui/material/styles';

const GRAY = '#424242';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: GRAY, paper: GRAY },
  },
  typography: {
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
