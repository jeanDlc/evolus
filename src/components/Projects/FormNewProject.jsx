import { Button, Card, CardContent, Container, FormControl, FormControlLabel, FormHelperText, Grid, Input, InputLabel, TextField, Typography , Checkbox, FormLabel, Select, MenuItem } from '@material-ui/core';
import {format} from 'date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FormGroup from '@material-ui/core/FormGroup';
import employeesArrayJson from '../../lib/employeesArray.json';
import clientsArrayJson from '../../lib/clientsArray.json';
import React from 'react';

const FormNewProject = () => {
    const createNewProject=e=>{
        e.preventDefault();
        console.log('create new project')
    }
    return ( 
        <Container maxWidth='md' style={{marginTop:50}} >
            <Card  style={{marginBottom:28}} >
                <CardContent component='form' onSubmit={createNewProject} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom >Nuevo Proyecto</Typography>
                    <Typography gutterBottom>Llena el formulario para crear un nuevo proyecto</Typography>
                    <FormControl color='secondary'  margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="nombre">Nombre del proyecto</InputLabel>
                        <Input id="nombre" name='nombre' type='text' />
                    </FormControl>
                    <FormControl color='secondary' margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="descripcion">Descripción del proyecto</InputLabel>
                        <Input multiline rows={10}  id="descripcion" name='descripcion' type='text' />
                    </FormControl>
                    <Grid container spacing={3} style={{marginBottom:15, marginTop:10}} >
                        <Grid item  xs={12} md={6} >
                            <FormControl  fullWidth={true}  margin='normal'>
                                <TextField
                                    id="fecha_inicio"
                                    label="Inicio de proyecto"
                                    type="date"
                                    name='fecha_inicio'
                                    color='secondary'
                                    defaultValue={format(new Date(),'yyyy-MM-dd')}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    aria-describedby="helper-fecha-inicio"
                                />
                                <FormHelperText id="helper-fecha-inicio">Fecha de inicio del proyecto</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item  xs={12} md={6} >
                            <FormControl  fullWidth={true}  margin='normal'>
                                <TextField
                                    id="fecha_fin"
                                    label="Fin de proyecto"
                                    type="date"
                                    name='fecha_fin'
                                    color='secondary'
                                    defaultValue={format(new Date(),'yyyy-MM-dd')}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    aria-describedby="helper-fecha-inicio"
                                />
                                <FormHelperText id="helper-fecha-inicio">Fecha de fin del proyecto</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControl color='secondary' margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="numMatricula">Número de matrícula</InputLabel>
                                <Input 
                                    startAdornment={
                                        <InputAdornment position='start' >
                                            <DirectionsCarIcon/>
                                        </InputAdornment>
                                    }
                                id="numMatricula" name='numMatricula' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControl color='secondary' margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="nombre">Monto a pagar</InputLabel>
                                <Input 
                                    startAdornment={
                                        <InputAdornment position='start' >
                                            <MonetizationOnIcon/>
                                        </InputAdornment>
                                    }
                                    id="nombre" name='nombre' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControl color='secondary' margin='normal' fullWidth={true}>
                                <InputLabel id="label-select-client" >Cliente</InputLabel>
                                <Select
                                    labelId="label-select-client"
                                >
                                    {clientsArrayJson.clientes.map(client=>(
                                        <MenuItem value={client.idCliente} > {client.nombre} {client.apellidos} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl component='fieldset' style={{marginBottom:18}} >
                        <FormLabel component='legend'  color='secondary' >Equipo</FormLabel>
                        <FormGroup row >
                            
                            {employeesArrayJson.empleados.map(employee=>(
                                <FormControlLabel 
                                    control={<Checkbox  name='' />}
                                    label={`${employee.nombre} ${employee.apellidos} `}
                                />
                            ))}
                            
                        </FormGroup>
                    </FormControl>
                    
                    <Button startIcon={ <AddCircleIcon/>} type='submit' variant='contained' color='primary' fullWidth >Guardar</Button>
                </CardContent>
            </Card>
            
        </Container>
     );
}
 
export default FormNewProject;