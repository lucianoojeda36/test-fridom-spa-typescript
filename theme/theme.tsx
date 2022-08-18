import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette:{
    primary:{
      main:'#2196f3'
    },
    secondary:{
      main:'#ffa733'
    }
  }
});

export default theme;