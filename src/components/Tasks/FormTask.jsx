import { Card, CardContent, FormControl,  Input, InputLabel, Typography, Button, Grid ,FormHelperText, Container,Switch,FormControlLabel} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React,{useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import { newProjectTask } from '../../lib/services/project';
import useForm from '../../lib/hooks/useForm';
import { newTaskValidation } from '../../lib/validation/forms/task';
import { useParams } from 'react-router-dom';
import { getTaskById,updateTask } from '../../lib/services/task';
import EditIcon from '@material-ui/icons/Edit';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
function useQuery(){
    return new URLSearchParams(useLocation().search);
}
const FormTask = ({ edit=false}) => {
    let query = useQuery();
    //idProject is required to create a new Task
    const idProject=query.get('idProject');
    const [done,setDone]=useState(false);
    const params=useParams();
    useEffect(()=>{
        let isMounted=true;
        if(edit){
            //get the task we need to update
            getTaskById(params.id)
            .then(res=>{
                if(isMounted){
                    setDone(res.estado);
                    setTask(res)
                }
            })
            .catch(error=>{
                console.log(error)
                redirecto('/proyectos')
                toast.error(error.response?.data?.error || 'Ocurrió un error');
            })
        }
        return ()=>isMounted=false;
    },[edit]);
    const redirecto=useRedirecTo();
    const initialState={
        nombre:'',
        descripcion:'',
        estado:false
    }
    
    const handleTaskReq=async()=>{
        //handle the request: update || create
        try {
            let res;
            if(edit){
                //update the task
                task.estado=done;
                res=await updateTask(params.id, task);
            }else{
                //create a new project's task
                res=await newProjectTask(idProject, task);
            }
            toast.success(res.msg || 'Éxito');
            redirecto(`/proyectos`);
        } catch (error) {
            if(error.response?.data?.errores){
                //a list of errors
                const arrayErrors=error.response.data.errores;
                arrayErrors.forEach(err=>toast.error(err.msg));
            }else{
                console.log(error)
                //just one error message
                toast.error(error.response?.data?.error || 'Ocurrió un error');
            }
        }
    }
    const {errors,handleChange,handleSubmit, fields:task={},setFields:setTask }=useForm(initialState,newTaskValidation, handleTaskReq);
    
    return ( 
        <Layout>
        <Container maxWidth='sm' style={{marginTop:40}} >
            <Card>
                <CardContent component='form' onSubmit={handleSubmit} >
                    <Typography style={{fontWeight:'bold'}} component='h1' 
                        variant='h4' gutterBottom 
                    >{edit? 'Editar': 'Nueva'} Tarea</Typography>
                    <Typography gutterBottom
                        style={{fontWeight:'bold', marginBottom:30}}
                        >{edit? 
                            'Edita los campos que requieras':
                            'Llena el formulario' 
                        }
                    </Typography>
                    <Grid container  spacing={3} >
                        <Grid item xs={12} md={6} >
                            <FormControl 
                                error={errors.nombre ? true:false} 
                                color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="nombre">Nombre de la Tarea</InputLabel>
                                <Input id="nombre" name='nombre' 
                                    value={task.nombre}
                                    onChange={handleChange}
                                    type='text' />
                                    {errors.nombre && (
                                        <FormHelperText>{errors.nombre}</FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                        {edit && (
                            <Grid item xs={12} md={6} >
                                <FormControlLabel
                                
                                    control={
                                        <Switch
                                            checked={done}
                                            onChange={()=>setDone(!done)}
                                            name="estado"
                                            color="secondary"
                                        />
                                    }
                                    label={done? 'Terminado': 'No terminado' }
                                />
                            </Grid>
                        )}
                    </Grid>
                    
                    <FormControl color='secondary' 
                        error={errors.descripcion ? true:false} 
                        margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="descripcion">Descripción de tarea</InputLabel>
                        <Input multiline rows={10}  id="descripcion" name='descripcion' 
                            value={task.descripcion}
                            onChange={handleChange}
                            type='text' />
                            {errors.descripcion && (
                                <FormHelperText>{errors.descripcion}</FormHelperText>
                            )}
                    </FormControl>
                    
                    <FormControl color='secondary' margin='normal' fullWidth={true}>
                        <Button 
                            startIcon={ edit? <EditIcon/> :<AddCircleIcon/> } 
                            type='submit' variant='contained' 
                            color='primary' fullWidth 
                        >Guardar {edit && 'Cambios' } </Button>
                    </FormControl>
                </CardContent>
            </Card>
        </Container>
        </Layout>
     );
}
 
export default FormTask;