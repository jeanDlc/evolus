import { Button, Card, CardContent, Container, FormControl, Grid, Input, InputAdornment, InputLabel, Typography,FormHelperText } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React, {useEffect} from 'react';
import {newClient , updateClient, getClientById} from '../../lib/services/client';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import useForm from '../../lib/hooks/useForm';
import { validateClient } from '../../lib/validation/forms/client';
const FormNewClient = () => {
    const params=useParams();
    const redirectTo=useRedirecTo();
    //estado inicial del cliente
    const initialState={
        nombre:"", apellidos:"",
        num_telefonico:"", email:"",
        dni:"", ruc:"",
        direccion:""
    }
    //o crea o edita un cliente
    const handleClient=async()=>{
        try {
            let res;
            if(params.id){
                //update
                res=await updateClient(params.id, client);
            }else{
                //post new client
                res=await newClient(client);
            }
            toast.success(res.data?.msg || 'Éxito');
            redirectTo('/clientes')
        } catch (error) {
            if(error.response?.data?.errores){
                const arrayErrors=error.response.data.errores;
                arrayErrors.forEach(err=>toast.error(err.msg));
            }else{
                toast.error(error.response?.data?.error || 'Ocurrió un error');
            }
        }
    }
    
    const {handleChange, handleSubmit,errors,fields:client={}, setFields:setClient}=useForm(initialState,validateClient, handleClient);

    useEffect(()=>{
        let isMounted=true;
        if(params.id){
            //si estamos en edición-->rellenar el formulario
            getClientById(params.id)
            .then(res=>{
                if(isMounted) setClient(res)
            })
            .catch(error=>{
                console.log(error.response);
                redirectTo('/clientes');
                toast.error(error.response?.data?.error || 'Error');
            })
        }else{
            if(isMounted) setClient(initialState)
        }
        return ()=>isMounted=false;
    },[params.id]);
    return ( 
        <Container maxWidth='md' style={{marginTop:40}} >
            <Card>
                <CardContent component='form' onSubmit={handleSubmit} >
                    <Typography style={{fontWeight:'bold'}} component='h1' variant='h4' gutterBottom  >
                        {params.id? 'Editar cliente' : 'Nuevo Cliente'}
                    </Typography>
                    <Typography>
                        {params.id? 
                            'Modifica los campos que requieras' :
                            'Llena el formulario para agregar a un nuevo cliente'
                        }
                    </Typography>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}  >
                            <FormControl color='secondary'  
                                error={errors.nombre}
                                margin='normal' fullWidth={true}>
                                <InputLabel htmlFor='nombre' >Nombre de cliente</InputLabel>
                                <Input id='nombre' name='nombre' 
                                    value={client.nombre} 
                                    onChange={handleChange}
                                />
                                {errors.nombre && (
                                    <FormHelperText>{errors.nombre} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.apellidos}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="apellidos">Apellidos del cliente</InputLabel>
                                <Input id="apellidos" name='apellidos' type='text' 
                                    value={client.apellidos} 
                                    onChange={handleChange}
                                />
                                {errors.apellidos && (
                                    <FormHelperText>{errors.apellidos} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.num_telefonico}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="num_telefonico">Número telefónico</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <PhoneIcon/>
                                    </InputAdornment>
                                } id="num_telefonico" name='num_telefonico' type='text' 
                                    value={client.num_telefonico} 
                                    onChange={handleChange}
                                />
                                {errors.num_telefonico && (
                                    <FormHelperText>{errors.num_telefonico} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.email}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="email">Correó electrónico (email)</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <EmailIcon/>
                                    </InputAdornment>
                                } id="email" name='email' type='email' 
                                    value={client.email} 
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <FormHelperText>{errors.email} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.dni}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="dni">DNI</InputLabel>
                                <Input id="dni" name='dni' type='text' 
                                    value={client.dni} 
                                    onChange={handleChange}
                                />
                                {errors.dni && (
                                    <FormHelperText>{errors.dni} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.ruc}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="ruc">RUC</InputLabel>
                                <Input id="ruc" name='ruc' type='text' 
                                    value={client.ruc} 
                                    onChange={handleChange}
                                />
                                {errors.ruc && (
                                    <FormHelperText>{errors.ruc} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  
                                error={errors.direccion}
                                margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="direccion">Dirección del cliente</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <HomeIcon/>
                                    </InputAdornment>
                                } id="direccion" name='direccion' type='text' 
                                    value={client.direccion} 
                                    onChange={handleChange}
                                />
                                {errors.direccion && (
                                    <FormHelperText>{errors.direccion} </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' color='primary' 
                                startIcon={ params.id? <EditIcon/>: <AddCircleIcon/>}
                                fullWidth 
                                style={{marginTop:15}}
                                type='submit'
                            >
                                {params.id? 'Guardar Cambios' : 'Guardar'}
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
     );
}
 
export default FormNewClient;