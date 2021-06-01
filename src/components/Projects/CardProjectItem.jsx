import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {truncatePhrase} from '../../lib/functions/functions';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    return ( 
        <Card >
            <CardActionArea>
                <CardContent>
                    <Typography component='h3' variant='h5' >{project.nombre} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {truncatePhrase(project.descripcion)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box display='flex' alignItems='center' >
                    <Button style={{marginRight:20}}  >
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