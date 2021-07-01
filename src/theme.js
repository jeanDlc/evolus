import { red, indigo, green, yellow, blue } from '@material-ui/core/colors';
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
    warning:{
      main:yellow[800]
    },
    info:{
      main:blue.A400
    },
    type:'dark',
    
    
  },
  overrides:{
    MuiCard:{
      root:{
        backgroundColor:'rgb(34, 43, 54)'
      }
    },
    MuiMenu:{
      list:{
        backgroundColor:'rgb(34, 43, 54)'
      }
    },
    MuiButton:{
      containedPrimary:{
        backgroundColor:indigo.A200,
        "&:hover":{
          backgroundColor:indigo[700]
        },
        color: 'white'
      },
      containedSecondary:{
        backgroundColor:red.A200,
        "&:hover":{
          backgroundColor:red[700]
        }
      },
      contained:{
        backgroundColor:green[600],
        color: 'white',
        "&:hover":{
          backgroundColor:green[700]
        }
      }
      
    },
    MuiDialog:{
      paper:{
        backgroundColor:'rgb(34, 43, 54)'
      }
    },
    
  }
  
});

export default theme;