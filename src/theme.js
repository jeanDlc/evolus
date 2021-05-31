import { red, indigo } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[400],
      contrastText:'#ffffff'
    },
    secondary: {
      main: 'rgb(34, 43, 54)',
      contrastText:'rgb(145, 158, 171)'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'rgb(23, 28, 36)',
    },
    type:'dark',
    
    
  },
  
  
});

export default theme;