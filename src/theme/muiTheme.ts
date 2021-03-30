import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const muiTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: blue[100],
      main: blue[200],
      dark: blue[300],
    },
    secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
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
