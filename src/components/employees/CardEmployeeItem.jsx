import {Box, Button, Card, CardActionArea, CardActions, CardContent,  Typography } from '@material-ui/core';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
const useStyles = makeStyles((theme) => ({
    danger: {
      color: theme.palette.error.main
    },
    success: {
      color:theme.palette.success.main
    },
    icon:{
        color:theme.palette.primary.contrastText,
        fontSize:20,
        marginRight:10
    }
  }));
const CardEmployeeItem =({employee}) => {
    const redirectTo=useRedirecTo();
    const classes=useStyles();
    return ( 
        <Card>
            <CardActionArea onClick={()=>redirectTo(`/empleado/${employee.id}`)} >
                <CardContent>
                    <Typography gutterBottom component='h3' variant='h5' style={{fontWeight:'bold'}} >
                        {employee.nombre}  {employee.apellidos}
                    </Typography>
                    <Typography gutterBottom >{ employee.Rol.nombre} </Typography>
                    <Box display='flex' alignItems='center' >
                        <PhoneIcon  className={classes.icon} />
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {employee.num_telefonico}
                        </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' >
                        <EmailIcon className={classes.icon} />
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {employee.email}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box display='flex' alignItems='center' >
                    <Button color='secondary' style={{marginRight:20}} 
                        onClick={()=>redirectTo(`/empleado/${employee.idEmpleado}`)}  
                    >
                        Ver más <ArrowForwardIosIcon style={{fontSize:15}} />
                    </Button>
                </Box>
            </CardActions>
        </Card>
     );
}
 
export default CardEmployeeItem;