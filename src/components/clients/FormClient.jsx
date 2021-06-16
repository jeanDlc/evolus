import { Button, Card, CardContent, Container, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React,{ useState } from 'react';
import {newClient , updateClient, getClientById} from '../../lib/services/client';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
const FormNewClient = () => {
    const params=useParams();
    const redirectTo=useRedirecTo();
    const initialState={
        nombre:"", apellidos:"",
        num_telefonico:"", email:"",
        dni:"", ruc:"",
        direccion:""
    }
    const [client,setClient]=useState(initialState);
    useEffect(()=>{
        let isMounted=true;
        if(params.id){
            getClientById(params.id)
            .then(res=>{
                if(isMounted) setClient(res)
            })
            .catch(error=>{
                console.log(error.response);
                redirectTo('/clientes');
                toast.error(error.response?.data?.error || 'Error');
            })
        }
        return ()=>isMounted=false;
    },[]);
    const handleChange=e=>{
        setClient({
            ...client,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async e=>{
        e.preventDefault();
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
                            <FormControl color='secondary'  margin='normal' fullWidth={true}>
                                <InputLabel htmlFor='nombre' >Nombre de cliente</InputLabel>
                                <Input id='nombre' name='nombre' 
                                    value={client.nombre} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="apellidos">Apellidos del cliente</InputLabel>
                                <Input id="apellidos" name='apellidos' type='text' 
                                    value={client.apellidos} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="num_telefonico">Número telefónico</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <PhoneIcon/>
                                    </InputAdornment>
                                } id="num_telefonico" name='num_telefonico' type='text' 
                                    value={client.num_telefonico} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="email">Correó electrónico (email)</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <EmailIcon/>
                                    </InputAdornment>
                                } id="email" name='email' type='email' 
                                    value={client.email} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="dni">DNI</InputLabel>
                                <Input id="dni" name='dni' type='text' 
                                    value={client.dni} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="ruc">RUC</InputLabel>
                                <Input id="ruc" name='ruc' type='text' 
                                    value={client.ruc} 
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl color='secondary'  margin='normal' fullWidth={true} >
                                <InputLabel htmlFor="direccion">Dirección del cliente</InputLabel>
                                <Input startAdornment={
                                    <InputAdornment>
                                        <HomeIcon/>
                                    </InputAdornment>
                                } id="direccion" name='direccion' type='text' 
                                    value={client.direccion} 
                                    onChange={handleChange}
                                />
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