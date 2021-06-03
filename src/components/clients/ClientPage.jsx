import { Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
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
import Btn from '../ui/Btn';

const ProjectPage = () => {
    
    const params=useParams();
    const idCliente= params.id;
    console.log(idCliente);
    return ( 
        <Container component='main' maxWidth='sm' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h4' align='center' gutterBottom  >Toño Perez</Typography>
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Nombre' secondary='Toño' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Apellido' secondary='Pérez Aldivar' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PhoneIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Teléfono' secondary='+51 952 143 999' />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <EmailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Email' secondary='tonio@gmail.com' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <DataUsageIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='RUC' secondary='1798285937001' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Dirección' secondary='Mz Los Bolitos ' />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                </CardContent>
                <CardActions>
                    <Grid  container spacing={2} style={{marginBottom:5}} >
                        <Grid item md={6} >
                            <Btn fullWidth={true}  color='secondary'>Editar cliente</Btn>
                        </Grid>
                        <Grid item md={6} >
                            <Btn  fullWidth={true}  color='red' >Eliminar cliente</Btn>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Container>
     );
}
 
export default ProjectPage;