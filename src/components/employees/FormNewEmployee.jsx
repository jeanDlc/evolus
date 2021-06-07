import { Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, Input, InputAdornment, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
const FormNewEmployee = () => {
    const createNewEmployee=e=>{
        e.preventDefault();
        console.log('create new employee');
    }
    return ( 
        <Container maxWidth='md' style={{marginTop:50}}>
            <Card>
                <CardContent component='form' onSubmit={createNewEmployee} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom >Nuevo Empleado</Typography>
                        <Typography gutterBottom>Llena el formulario para crear un nuevo empleado</Typography>
                    
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="nombre">Nombre del empleado</InputLabel>
                                <Input id="nombre" name='nombre' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="apellidos">Apellidos del empleado</InputLabel>
                                <Input id="apellidos" name='apellidos' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="num_telefonico">Número telefónico</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <PhoneIcon/>
                                    </InputAdornment>
                                } id="num_telefonico" name='num_telefonico' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="email">Correó electrónico (email)</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <EmailIcon/>
                                    </InputAdornment>
                                } id="email" name='email' type='email' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="dni">DNI</InputLabel>
                                <Input id="dni" name='dni' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="ruc">RUC</InputLabel>
                                <Input id="ruc" name='ruc' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="direccion">Dirección del empleado</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <HomeIcon/>
                                    </InputAdornment>
                                } id="direccion" name='direccion' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel id="label-rol" htmlFor="rol">Cargo/Rol</InputLabel>
                                <Select
                                    labelId="label-rol"
                                    id="rol"
                                    
                                >
                                    <MenuItem value={1} >Asesor de servicio</MenuItem>
                                    <MenuItem value={2} >Jefe de taller</MenuItem>
                                    <MenuItem value={3} >Técnico automotriz</MenuItem>
                                    <MenuItem value={4} >Administrador</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <LockIcon/>
                                    </InputAdornment>
                                } id="password" name='password' type='password'
                                    aria-describedby="helper-password"
                                />
                                <FormHelperText id="helper-password" >Contraseña para la cuenta de usuario</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="confirmar">Confirma la contraseña</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <LockIcon/>
                                    </InputAdornment>
                                } id="confirmar" name='confirmar' type='password'
                                    aria-describedby="helper-confirmar"
                                />
                                <FormHelperText id="helper-confirmar" >Vuelve a escribir la contraseña</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button startIcon={<AddCircleIcon/>} variant='contained'
                                fullWidth={true}
                                color='primary' 
                                type='submit'
                            >Guardar</Button>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </Container>
     );
}
 
export default FormNewEmployee;