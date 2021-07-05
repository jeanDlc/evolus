import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {  Button, Card, CardContent, Container, makeStyles, Typography,Dialog  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useOneTask from '../../lib/hooks/useOneTask';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import ConfirmDeleteTask from './ConfirmDeleteTask';
import { toast } from 'react-toastify';
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
     ); 
}
 
export default TaskPage;