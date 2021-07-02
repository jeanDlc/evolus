import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Box, Button, Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import WarningIcon from '@material-ui/icons/Warning';
import useOneTask from '../../lib/hooks/useOneTask';
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
    const [done,setDone]=useState(false);
    const classes=useStyles();
    const params=useParams();
    const {task,error}=useOneTask(params.id)
    const handleChange=()=>{
        setDone(!done);
    }
    if(error) return 'Hubo un error'
    return ( 
        <Container component='main' >
            <Card style={{marginTop:25}} >
                <CardContent>
                    <Typography className={classes.title} component='h2' variant='h4' align='center' >
                        <span className={classes.bold} >Tarea: </span> {task.nombre}
                    </Typography>
                    <Grid container spacing={3} >
                        <Grid xs={12} item md={6} >
                            <Typography className={classes.bold} component='h3' variant='h6' gutterBottom>Descripción</Typography>
                            <Typography color='textSecondary' >
                                {task.descripcion}
                            </Typography>   
                        </Grid>
                        <Grid xs={12} item md={6} >
                            <Box display='flex' >
                                <Typography style={{fontWeight:'bold', marginRight:10}} component='h3' variant='h6' gutterBottom>Estado</Typography>
                                {done ?
                                    <CheckCircleIcon  className={classes.success} />
                                : 
                                    <WarningIcon  className={classes.danger} />
                                }
                            </Box>
                            <Box marginBottom={2} >
                                <Typography component='h3' variant='h6' gutterBottom>
                                    <span className={classes.bold}>Fecha fin</span>:{
                                        format(new Date(task.fecha_fin || null),'yyyy-MM-dd')
                                    }
                                </Typography>
                            </Box>
                            <Box display='flex' marginBottom={2} >
                                <Switch checked={done} onChange={handleChange}  />
                                <Typography style={{fontWeight:'bold', marginLeft:10}} component='h3' variant='h6' gutterBottom> {done? 'Hecho' : 'Pendiente'} </Typography>
                            </Box>
                            <Grid container spacing={3} >
                                <Grid item xs={12} md={6} >
                                    <Button  fullWidth color='primary' variant='contained' 
                                        startIcon={<EditIcon/> }
                                    >Editar</Button>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Button color='secondary' variant='contained' fullWidth 
                                        startIcon={<DeleteIcon/> }
                                    >Eliminar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </Container>
     ); 
}
 
export default TaskPage;