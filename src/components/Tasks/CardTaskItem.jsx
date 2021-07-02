import { Box, Button, Card, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import {truncatePhrase} from '../../lib/functions/functions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    danger: {
      color: theme.palette.error.main
    },
    success: {
      color:theme.palette.success.main
    },
  }));
const CardTaskItem = ({task}) => {
    const redirectTo = useRedirecTo();
    const classes=useStyles();
    
    return ( 
        <Card>
            <CardActionArea onClick={()=>redirectTo(`/tarea/${task.id}`)}  >
                <CardContent >
                    <Typography component='h3' variant='h5' >{task.nombre} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {truncatePhrase(task.descripcion, 100)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions>
                <Box display='flex' alignItems='center' >
                    <Button color='secondary' style={{marginRight:20}} 
                        onClick={()=>redirectTo(`/tarea/${task.id}`)}  
                    >
                        Ver más <ArrowForwardIosIcon style={{fontSize:15}} />
                    </Button>
                    {task.estado? (
                        <CheckCircleIcon className={classes.success} />
                    ): (
                        <CheckCircleOutlineIcon className={classes.danger} />
                    )}
                </Box>
                
            </CardActions>
        </Card>
     );
}
 
export default CardTaskItem;