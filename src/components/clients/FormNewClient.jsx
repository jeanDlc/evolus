import { Button, Card, CardContent, Container, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
const FormNewClient = () => {
    const createNewClient=e=>{
        e.preventDefault();
        console.log('create new client');
    }
    return ( 
        <Container maxWidth='md' style={{marginTop:40}} >
            <Card>
                <CardContent component='form' onSubmit={createNewClient} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom  >Nuevo Cliente</Typography>
                    <Typography>Llena el formulario para agregar a un nuevo cliente</Typography>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}  >
                            <FormControl color='secondary'  margin='normal' fullWidth={true}>
                                <InputLabel htmlFor='nombre' >Nombre de cliente</InputLabel>
                                <Input id='nombre' name='nombre'  />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="apellidos">Apellidos del cliente</InputLabel>
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
                                <InputLabel htmlFor="direccion">Dirección del cliente</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <HomeIcon/>
                                    </InputAdornment>
                                } id="direccion" name='direccion' type='text' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' color='primary' 
                                startIcon={<AddCircleIcon/>}
                                fullWidth 
                                style={{marginTop:15}}
                                type='submit'
                            >Guardar</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
     );
}
 
export default FormNewClient;