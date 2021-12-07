import { createTheme } from '@mui/material/styles';
import { grey, brown } from '@mui/material/colors/';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 720,
        lg: 1150,
        xl: 1500
      }
    },
    palette: {
      primary: {
        main: grey[900]
      },
      secondary: {
        main: brown[50]
      },
    },
    components: {
    MuiContainer: {
      styleOverrides: {
        root: {
      maxWidth: {
        md: 5
      }}
    }
    }
  }
  });

  export default theme
