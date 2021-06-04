import { Button } from '@material-ui/core';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';

  
const Btn = ({children, onClick,fullWidth=false ,color='green' }) => {
  const theme=useTheme();
    let bgColor;
    switch(color){
      case 'green': 
        bgColor=theme.palette.success.main;
        break;
      case 'red':
        bgColor=theme.palette.error.main;
        break;
      case 'yellow':
        bgColor=theme.palette.warning.main;
        break;
      case 'blue':
          bgColor=theme.palette.info.main;
          break;
      case 'primary':
          bgColor=theme.palette.primary.main;
          break;
      case 'secondary':
          bgColor=theme.palette.secondary.main;
          break;
      default:
        bgColor='white';
    }
    
    return ( 
        <Button fullWidth={fullWidth} onClick={onClick} style={{backgroundColor:bgColor, marginBottom:10}} > {children} </Button>
     );
}
 
export default Btn;