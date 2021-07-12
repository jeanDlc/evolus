import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {  Button, Card, CardContent, Container, makeStyles, Typography,Dialog, Box  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useOneTask from '../../lib/hooks/useOneTask';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import ConfirmDeleteTask from './ConfirmDeleteTask';
import WarningIcon from '@material-ui/icons/Warning';
import DoneIcon from '@material-ui/icons/Done';
import { toast } from 'react-toastify';
import Layout from '../Layout/Layout';
const useStyles = makeStyles((theme) => ({
    bold:{
        fontWeight:'bold'
    },
    title:{
        marginTop:18,
        marginBottom:50
    }
  }));
const TaskPage = () => {
    const redirectTo=useRedirecTo();
    const [openDelete, setOpenDelete]=useState(false);
    const classes=useStyles();
    const params=useParams();
    const {task,error,errorMessage}=useOneTask(params.id)

    useEffect(()=>{
        if(error){
            toast.error(errorMessage || 'Error');
            redirectTo('/*'); //redirect to 404
        }
    },[error]);

    return ( 
        <Layout>
        <Container maxWidth='sm' component='main' >
            <Card style={{marginTop:30}} >
                <CardContent>
                    <Typography className={classes.title} component='h2' variant='h4' align='center' >
                        <span className={classes.bold} >Tarea: </span> {task.nombre}
                    </Typography>
                    <Typography className={classes.bold} component='h3' variant='h6'        gutterBottom>Descripción</Typography>
                    <Typography color='textSecondary'style={{marginBottom:18}}  >
                        {task.descripcion}
                    </Typography> 
                    <Box>
                        <Typography className={classes.bold} component='h3' variant='h6'        gutterBottom>Estado</Typography>
                        <Box display='flex' alignItems='center' marginBottom={3} >
                            {task.estado? (
                                <>
                                    <DoneIcon color='secondary' style={{marginRight:10}} />
                                    <Typography color='textSecondary' >Terminado</Typography>
                                </>
                            ) : (
                                <>
                                    <WarningIcon color='error' style={{marginRight:10}} /> 
                                    <Typography  color='textSecondary' >Sin terminar</Typography>
                                </>
                            )}
                        </Box>
                        
                    </Box>
                    <Button  fullWidth color='primary' 
                        variant='contained' 
                        style={{marginBottom:10}}
                        onClick={()=>redirectTo(`/editar-tarea/${params.id}`)}
                        startIcon={<EditIcon/> }
                    >Editar</Button>
                    <Button color='secondary' 
                        onClick={()=>setOpenDelete(true)}
                        variant='contained' fullWidth 
                        startIcon={<DeleteIcon/> }
                    >Eliminar</Button>
                    <Dialog
                        open={openDelete}
                        onClose={()=>setOpenDelete(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <ConfirmDeleteTask setOpen={setOpenDelete} task={task} />
                    </Dialog>
                </CardContent>
            </Card>
        </Container>
        </Layout>
     ); 
}
 
export default TaskPage;