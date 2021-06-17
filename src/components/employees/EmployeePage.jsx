import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react';
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
import useOneEmployee from '../../lib/hooks/useOneEmployee';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import { Dialog } from '@material-ui/core';
import ConfirmDeleteEmployee from './ConfirmDeleteEmployee';
const EmployeePage = () => {
    const [open, setOpen]=useState(false);
    const redirectTo=useRedirecTo();
    const params=useParams();
    const employee=useOneEmployee(params.id);
    if(!employee) return 'Loading'
    return ( 
        <Container component='main' maxWidth='sm' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h4' align='center' gutterBottom  >
                        {`${employee.nombre} ${employee.apellidos}`}
                    </Typography>
                    <Box display='flex' justifyContent='center' >
                        <WorkIcon style={{marginRight:8}} />
                        <Typography align='center'  gutterBottom >{employee.Rol.nombre} </Typography>
                    </Box>
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Nombre' secondary={employee.nombre} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Apellido' secondary={employee.apellidos}/>
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <PhoneIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Teléfono' secondary={employee.num_telefonico} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <AccountBoxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='User' secondary={employee.email}/>
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <WorkIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Cargo' secondary={employee.Rol.nombre} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} >
                            <List>
                                <ListItem >
                                    <ListItemIcon  >
                                        <EmailIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Email' secondary={employee.email} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <DataUsageIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='RUC' secondary={employee.ruc} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Dirección' secondary={employee.direccion} />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon  >
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Activo' 
                                        secondary={employee.activo? 'Sí': 'No'}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                </CardContent>
                <CardActions>
                    <Grid  container spacing={2} style={{marginBottom:5}} >
                        <Grid item md={6} >
                            <Button variant='contained' color='primary' fullWidth 
                                onClick={()=>redirectTo(`/actualizar-empleado/${employee.id}`)}
                            startIcon={
                                <EditIcon/>
                            } > Editar </Button>
                        </Grid>
                        <Grid item md={6} >
                            <Button variant='contained' color='secondary' fullWidth startIcon={
                                <DeleteIcon/>
                            } 
                                onClick={()=>setOpen(true)}
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
                <ConfirmDeleteEmployee idEmployee={employee.id} setOpen={setOpen} />
            </Dialog>
        </Container>
     );
}
 
export default EmployeePage;