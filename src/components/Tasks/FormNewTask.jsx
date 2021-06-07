import { Box, Card, CardContent, Container, FormControl, Grid, Input, InputLabel, TextField, Typography,FormHelperText, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {format} from 'date-fns';
import React from 'react';
const FormNewTask = () => {
    const createNewTask=e=>{
        e.preventDefault();
        console.log('create new task');
    }
    return ( 
        <Box maxWidth='600px' marginBottom={5} >
            <Card>
                <CardContent component='form' onSubmit={createNewTask} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom >Nueva Tarea</Typography>
                    <Typography gutterBottom>Llena el formulario</Typography>
                    <FormControl color='secondary'  margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="nombre">Nombre de la Tarea</InputLabel>
                        <Input id="nombre" name='nombre' type='text' />
                    </FormControl>
                    <FormControl color='secondary' margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="descripcion">Descripción de tarea</InputLabel>
                        <Input multiline rows={10}  id="descripcion" name='descripcion' type='text' />
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