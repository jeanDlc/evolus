import { red, indigo, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main:  'rgb(34, 43, 54)',
      contrastText:'rgb(145, 158, 171)',
    },
    secondary: {
      main: indigo.A200,
      contrastText:'#ffffff'
    },
    error: {
      main: red.A200,
    },
    background: {
      default: 'rgb(23, 28, 36)',
    },
    success:{
      main:green.A400
    },
    type:'dark',
    
    
  },
  overrides:{
    MuiCard:{
      root:{
        backgroundColor:'rgb(34, 43, 54)'
      }
    }
  }
  
});

export default theme;