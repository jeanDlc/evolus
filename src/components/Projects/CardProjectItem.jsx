import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {truncatePhrase} from '../../lib/functions/functions';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
const useStyles = makeStyles((theme) => ({
    danger: {
      color: theme.palette.error.main
    },
    success: {
      color:theme.palette.success.main
    },
  }));
const CardProjectItem = ({project}) => {
    
    const classes=useStyles();
    const redirectTo=useRedirecTo();
    return ( 
        <Card >
            <CardActionArea onClick={()=>redirectTo(`/proyecto/${project.id}`)} >
                <CardContent>
                    <Typography component='h3' gutterBottom variant='h5' style={{textTransform:'capitalize'}} 
                        >{project.nombre}  
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {truncatePhrase(project.descripcion)}
                    </Typography>
                    <Typography  variant="body2" component="p">
                        <span style={{fontWeight:'bold'}} >Matrícula: </span> {project.num_matricula}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box display='flex' alignItems='center' >
                    <Button color='secondary' style={{marginRight:20}} 
                        onClick={()=>redirectTo(`/proyecto/${project.idProyecto}`)}  
                    >
                        Ver más <ArrowForwardIosIcon style={{fontSize:15}} />
                    </Button>
                    {project.estado? (
                        <CheckCircleIcon className={classes.success} />
                    ): (
                        <CheckCircleOutlineIcon className={classes.danger} />
                    )}
                </Box>
            </CardActions>
        </Card>
     );
}
 
export default CardProjectItem;