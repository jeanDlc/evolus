import { Box, Button, Card, CardContent, Container, Divider, Grid, Typography, Collapse } from '@material-ui/core';
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import ProjectProgress from '../ui/ProjectProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PaymentIcon from '@material-ui/icons/Payment';
import tasksArray from '../../lib/tasksArray.json';
import CardTaskList from '../Tasks/CardTaskList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormNewTask from '../Tasks/FormNewTask';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
const ProjectPage = () => {
    const [showFormNewTask, setShowFormNewTask]=useState(false);
    const redirectTo =useRedirecTo();
    const params=useParams();
    const idProyecto= params.id;
    console.log(idProyecto);
    return ( 
        <Container component='main' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h3' align='center' gutterBottom  >Proyecto: Cambiar llanta</Typography>
                    <Divider/>
                    <Typography style={{marginTop:20}} gutterBottom component='h3' variant='h6'  >Descripción</Typography>
                    <Typography gutterBottom color='textSecondary' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    <Typography gutterBottom color='textSecondary'>Amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    
                    <Box component='section'  marginY={2} >
                        <Typography style={{marginBottom:15}} component='h3' variant='h6'  >Progreso</Typography>
                        <ProjectProgress progress={70} />
                        <Box display='flex' alignItems='center' marginTop={1} justifyContent='space-between' >
                            <Typography color='textSecondary' > 2 enero 2021 </Typography>
                            <Typography color='textSecondary' > 10 marzo 2021 </Typography>
                        </Box>
                    </Box>
                    <Grid container component='section' spacing={3} >
                            <Grid  item xs={12} md={6} lg={4} >
                                <Typography component='h3' variant='h6' >Detalles</Typography>
                                <List>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <MonetizationOnIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Monto' secondary='S/. 320' />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <DirectionsCarIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Matrícula'  secondary='32135351' />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <PaymentIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Estado'  secondary='No pagado ' />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12}  md={6} lg={4}>
                                <Typography component='h3' variant='h6' >Equipo</Typography>
                                <List>
                                    <ListItem button onClick={()=>redirectTo('/empleado/1')} >
                                        <ListItemIcon  >
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Técnico automotriz' secondary='Jorge Salinas' />
                                    </ListItem>
                                    <ListItem button onClick={()=>redirectTo('/empleado/1')} >
                                         <ListItemIcon>
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Jefe de Taller'  secondary='Juan Perez' />
                                    </ListItem>
                                    <ListItem button onClick={()=>redirectTo('/empleado/1')} >
                                        <ListItemIcon>
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Técnico automotriz'  secondary='Ana montoya ' />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12}  md={6} lg={4} >
                                <Typography component='h3' variant='h6' style={{marginBottom:20}} >Acciones</Typography>
                                <Button color='primary' variant='contained' fullWidth startIcon={
                                    <EditIcon/>
                                } 
                                    style={{marginBottom:18}}
                                > Editar </Button>
                                <Button color='secondary' variant='contained'  fullWidth startIcon={
                                    <DeleteIcon/>
                                } > Eliminar </Button>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
            <Box component='section' marginY={10} >
                <Typography component='h3' variant='h4' gutterBottom > 
                   <FormatListBulletedIcon/>  Tareas</Typography>
                    <Button style={{marginBottom:15}} 
                        startIcon={<AddCircleIcon/>}       
                        variant='contained' color='primary' 
                        onClick={()=>setShowFormNewTask(true)}
                    > Nueva tarea</Button>
                   <Collapse in={showFormNewTask} >
                        <FormNewTask/>
                   </Collapse>
                <CardTaskList tasksArray={tasksArray.tasks} />
            </Box>
        </Container>
     );
}
 
export default ProjectPage;