import React from 'react';
import {useParams} from 'react-router-dom';
import { Box, Button, Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles((theme) => ({
    danger: {
      color: theme.palette.error.main
    },
    success: {
      color:theme.palette.success.main
    },
    bold:{
        fontWeight:'bold'
    },
    title:{
        marginTop:18,
        marginBottom:40
    }
  }));
const TaskPage = () => {
    const classes=useStyles();
    const params=useParams();
    console.log(params);
    return ( 
        <Container component='main' >
            <Card style={{marginTop:25}} >
                <CardContent>
                    <Typography className={classes.title} component='h2' variant='h4' align='center' >
                        <span className={classes.bold} >Tarea: </span> Limpiar primera llanta
                    </Typography>
                    <Grid container spacing={3} >
                        <Grid item md={6} >
                            <Typography className={classes.bold} component='h3' variant='h6' gutterBottom>Descripción</Typography>
                            <Typography color='textSecondary' >
                                Ut sagittis mi a porta aliquam. Nam nec erat a orci iaculis feugiat eget vel quam. Donec accumsan, urna non elementum interdum, leo libero ultricies ipsum, eu rutrum ante nisi at ipsum. Integer tempor elit sit amet vestibulum pulvinar. Fusce quis nibh vestibulum, mollis quam vel, ultricies nunc. Phasellus sed libero imperdiet, faucibus mauris non, placerat ante. Maecenas lorem nunc, bibendum ac sagittis id, viverra quis magna
                            </Typography>   
                        </Grid>
                        <Grid item md={6} >
                            <Box display='flex' >
                                <Typography style={{fontWeight:'bold', marginRight:10}} component='h3' variant='h6' gutterBottom>Estado</Typography>
                                <CheckCircleIcon  className={classes.success} />
                            </Box>
                            <Box marginBottom={2} >
                                <Typography component='h3' variant='h6' gutterBottom>
                                    <span className={classes.bold}>Fecha fin</span>: 10 noviembre del 2020
                                </Typography>
                            </Box>
                            <Button color='secondary' variant='contained' >Hecho</Button>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </Container>
     ); 
}
 
export default TaskPage;