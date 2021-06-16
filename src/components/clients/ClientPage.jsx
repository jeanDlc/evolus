import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography, Dialog } from '@material-ui/core';
import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {getClientById} from '../../lib/services/client';
import { useState } from 'react';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import ConfirmDeleteClient from './ConfirmDeleteCliente';
const ProjectPage = () => {
    const redirectTo=useRedirecTo();
    const [open, setOpen]=useState(false);
    const [client, setClient]=useState(null);
    const params=useParams();
    const idClient= params.id;

    useEffect(()=>{
        let isMounted=true;
        getClientById(idClient)
        .then(res=>{
            if(isMounted) setClient(res);
        })
        .catch(error=>console.log(error))
        return ()=>isMounted=false;
    },[]);
    if(!client) return null;
    return ( 
        <Container component='main' maxWidth='sm' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h4' align='center' gutterBottom  >
                        {`${client.nombre}  ${client.apellidos}`}
                    </Typography>
                    <Box display='flex' justifyContent='center' marginBottom={1}  >
                        <StarIcon style={{marginRight:8}} />
                        <Typography align='center'  gutterBottom >Cliente</Typography>
                    </Box>
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Nombre' secondary={client.nombre} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Apellido' secondary={client.apellidos} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PhoneIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Teléfono' secondary={client.num_telefonico} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <EmailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Email' secondary={client.email} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <DataUsageIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='RUC' secondary={client.ruc} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Dirección' secondary={client.direccion} />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                </CardContent>
                <CardActions>
                    <Grid  container spacing={2} style={{marginBottom:5}} >
                        <Grid item md={6} >
                            <Button color='primary' variant='contained' fullWidth 
                                onClick={()=>redirectTo(`/actualizar-cliente/${client.id}`)}
                                startIcon={
                                    <EditIcon/>
                                } 
                            > Editar </Button>
                            
                        </Grid>
                        <Grid item md={6} >
                            <Button color='secondary' variant='contained'  fullWidth 
                                onClick={()=>setOpen(true)}
                                startIcon={
                                    <DeleteIcon/>
                                } 
                            > Eliminar </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <Dialog 
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <ConfirmDeleteClient setOpen={setOpen} idClient={client.id} />
            </Dialog>
        </Container>
     );
}
 
export default ProjectPage;