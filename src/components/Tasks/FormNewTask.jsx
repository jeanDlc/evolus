import { Box, Card, CardContent, FormControl,  Input, InputLabel, Typography, Button,TextField, Grid ,FormHelperText} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import { newProjectTask } from '../../lib/services/project';
import useForm from '../../lib/hooks/useForm';
import { newTaskValidation } from '../../lib/validation/forms/task';
const FormNewTask = ({project}) => {
    const redirecto=useRedirecTo();
    const initialState={
        nombre:'',
        descripcion:'',
        fecha_fin:format(new Date(), 'yyyy-MM-dd')
    }
    
    const newTask=async()=>{
        try {
            const res=await newProjectTask(project.id, fields);
            toast.success(res.msg || 'Éxito');
            redirecto(`/proyectos`);
        } catch (error) {
            if(error.response?.data?.errores){
                const arrayErrors=error.response.data.errores;
                arrayErrors.forEach(err=>toast.error(err.msg));
            }else{
                toast.error(error.response?.data?.error || 'Ocurrió un error');
            }
        }
    }
    const {errors,handleChange,handleSubmit, fields}=useForm(initialState,newTaskValidation, newTask);
    
    return ( 
        <Box maxWidth='600px' marginBottom={5} >
            <Card>
                <CardContent component='form' onSubmit={handleSubmit} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom >Nueva Tarea</Typography>
                    <Typography gutterBottom>Llena el formulario</Typography>
                    <Grid container  spacing={3} >
                        <Grid item xs={12} md={6} >
                            <FormControl 
                                error={errors.nombre ? true:false} 
                                color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="nombre">Nombre de la Tarea</InputLabel>
                                <Input id="nombre" name='nombre' 
                                    value={fields.nombre}
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
                                    value={fields.fecha_fin}
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
                            value={fields.descripcion}
                            onChange={handleChange}
                            type='text' />
                            {errors.descripcion && (
                                <FormHelperText>{errors.descripcion}</FormHelperText>
                            )}
                    </FormControl>
                    
                    <FormControl color='secondary' margin='normal' fullWidth={true}>
                        <Button 
                            startIcon={ <AddCircleIcon/>} 
                            type='submit' variant='contained' 
                            color='primary' fullWidth 
                        >Guardar</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </Box>
     );
}
 
export default FormNewTask;