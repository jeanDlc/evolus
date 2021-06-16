import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import PhoneIcon from '@material-ui/icons/Phone';
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
const CardClientItem = ({client}) => {
    
    const classes=useStyles();
    const redirectTo=useRedirecTo();
    return ( 
        <Card >
            <CardActionArea onClick={()=>redirectTo(`/cliente/${client.id}`)} >
                <CardContent>
                    <Typography component='h3' gutterBottom variant='h5' >{client.nombre} {client.apellidos} </Typography>
                    <Box display='flex' alignItems='center' >
                        <PhoneIcon  className={classes.icon} />
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {client.num_telefonico}
                        </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' >
                        <EmailIcon className={classes.icon} />
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {client.email}
                        </Typography>
                    </Box>
                    
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box display='flex' alignItems='center' >
                    <Button color='secondary' style={{marginRight:20}} 
                        onClick={()=>redirectTo(`/cliente/${client.idCliente}`)}  
                    >
                        Ver más <ArrowForwardIosIcon style={{fontSize:15}} />
                    </Button>
                </Box>
            </CardActions>
        </Card>
     );
}
 
export default CardClientItem;