import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 600,
        lg: 900,
        xl: 1200
      }
    }
  });

  export default theme
