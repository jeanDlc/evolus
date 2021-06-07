import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@material-ui/core';
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
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CheckIcon from '@material-ui/icons/Check';
import WorkIcon from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const ProjectPage = () => {
    
    const params=useParams();
    const idEmpleado= params.id;
    console.log(idEmpleado);
    return ( 
        <Container component='main' maxWidth='sm' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h4' align='center' gutterBottom  >Mario Andrade Apaza</Typography>
                    <Box display='flex' justifyContent='center' >
                        <WorkIcon style={{marginRight:8}} />
                        <Typography align='center'  gutterBottom >Empleado</Typography>

                    </Box>
                    
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Nombre' secondary='Mario' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Apellido' secondary='Andrade Apaza' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PhoneIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Teléfono' secondary='+51 952 143 999' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <AccountBoxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='User' secondary='and_@gmail.com' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <WorkIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Cargo' secondary='Jefe de taller' />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <EmailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Email' secondary='mar_andr@gmail.com' />
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
                                    <ListItemText primary='Dirección' secondary='Mz Los Lejanos ' />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Activo' secondary='Sí ' />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                </CardContent>
                <CardActions>
                    <Grid  container spacing={2} style={{marginBottom:5}} >
                        <Grid item md={6} >
                            <Button variant='contained' color='primary' fullWidth startIcon={
                                <EditIcon/>
                            } > Editar </Button>
                        </Grid>
                        <Grid item md={6} >
                            <Button variant='contained' color='secondary' fullWidth startIcon={
                                <DeleteIcon/>
                            } > Eliminar </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Container>
     );
}
 
export default ProjectPage;