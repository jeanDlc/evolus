import { Card, CardContent, FormControl,  Input, InputLabel, Typography, Button,TextField, Grid ,FormHelperText, Container} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React,{useEffect} from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import { newProjectTask } from '../../lib/services/project';
import useForm from '../../lib/hooks/useForm';
import { newTaskValidation } from '../../lib/validation/forms/task';
import { useParams } from 'react-router-dom';
import { getTaskById,updateTask } from '../../lib/services/task';
import EditIcon from '@material-ui/icons/Edit';
import { useLocation } from 'react-router-dom';
function useQuery(){
    return new URLSearchParams(useLocation().search);
}
const FormTask = ({ edit=false}) => {
    let query = useQuery();
    //idProject is required to create a new Task
    const idProject=query.get('idProject');
    
    const params=useParams();
    useEffect(()=>{
        let isMounted=true;
        if(edit){
            //get the task we need to update
            getTaskById(params.id)
            .then(res=>{
                isMounted && setTask({
                    ...res,
                    fecha_fin:format(new Date(res.fecha_fin), 'yyyy-MM-dd')
                });
            })
            .catch(error=>{
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
        fecha_fin:format(new Date(), 'yyyy-MM-dd')
    }
    
    const handleTaskReq=async()=>{
        //handle the request: update || create
        try {
            let res;
            if(edit){
                //update the task
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
        <Container maxWidth='sm' style={{marginTop:40}} >
            <Card>
                <CardContent component='form' onSubmit={handleSubmit} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom >{edit? 'Editar': 'Nueva'} Tarea</Typography>
                    <Typography gutterBottom
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
                        <Grid item xs={12} md={6} >
                            <FormControl color='secondary' 
                                error={errors.fecha_fin ? true:false} 
                                margin='normal' fullWidth={true} >
                                <TextField
                                    id='fecha_fin' 
                                    name='fecha_fin'
                                    label='Fin de tarea'
                                    value={task.fecha_fin}
                                    onChange={handleChange}  
                                    type='date' 
                                    aria-describedby="helper-fecha-fin"
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                                {errors.fecha_fin && (
                                    <FormHelperText>{errors.fecha_fin}</FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
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
     );
}
 
export default FormTask;