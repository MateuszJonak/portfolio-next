import { createMuiTheme } from '@material-ui/core/styles';
import { GRAY_DARK } from './colors';

export const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: GRAY_DARK,
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
