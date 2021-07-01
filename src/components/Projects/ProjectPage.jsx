import { Box, Button, Card, CardContent, Container, Divider, Grid, Typography, Collapse, Dialog } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
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
import CardTaskList from '../Tasks/CardTaskList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormNewTask from '../Tasks/FormNewTask';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { toast } from 'react-toastify';
import UseOneProject from '../../lib/hooks/useOneProject';
import {format} from 'date-fns';
import ConfirmDeleteProject from './ConfirmDeleteProject';
const ProjectPage = () => {
    const [openDeleteDialog,setOpenDeleteDialog]=useState(false);
    const [showFormNewTask, setShowFormNewTask]=useState(false);
    const redirectTo =useRedirecTo();
    const params=useParams();

    const {client,tasks,project,error,errorMessage}=UseOneProject(params.id);
    
    useEffect(()=>{
        if(error){
            redirectTo('/proyectos');
            toast.error(errorMessage || 'Error');
        }
    },[error]);

    if(!project) return 'Loading...'
    return ( 
        <Container component='main' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h3' align='center' gutterBottom
                        style={{textTransform:'capitalize'}}
                    >Proyecto: {project.nombre}</Typography>
                    <Divider/>
                    <Typography style={{marginTop:20}} gutterBottom component='h3' variant='h6'  >Descripción</Typography>
                    <Typography gutterBottom color='textSecondary' > 
                        {project.descripcion}
                    </Typography>
                    
                    <Box component='section'  marginY={2} >
                        <Typography style={{marginBottom:15}} component='h3' variant='h6'  >Progreso</Typography>
                        <ProjectProgress progress={70} />
                        <Box display='flex' alignItems='center' marginTop={1} justifyContent='space-between' >
                            <Typography color='textSecondary' 
                                >{format(new Date(project.fecha_inicio) ,'yyyy-MM-dd')}
                            </Typography>
                            <Typography color='textSecondary' 
                                > {format(new Date(project.fecha_fin),'yyyy-MM-dd')}
                            </Typography>
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
                                        <ListItemText primary='Monto' secondary={project.monto} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <DirectionsCarIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Matrícula'  secondary={project.num_matricula} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <PaymentIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary='Pagado?'  
                                            secondary={project.pagado? 'Sí': 'No'} 
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12}  md={6} lg={4}>
                                <Typography component='h3' variant='h6' >Equipo</Typography>
                                <List>
                                    {project.Empleados.map(employee=>(
                                        <ListItem button 
                                            key={employee.id}
                                            onClick={()=>redirectTo(`/empleado/${employee.id}`)} 
                                        >
                                            <ListItemIcon  >
                                                <PersonIcon/>
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary={employee.Rol.nombre} 
                                                secondary={
                                                    `${employee.nombre} ${employee.apellidos} `
                                                } 
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <List>
                                    <Typography component='h3' variant='h6'>Cliente</Typography>
                                    {client? (
                                        <ListItem button 
                                            onClick={()=>redirectTo(`/cliente/${client.id}`)} 
                                        >
                                            <ListItemIcon  >
                                                <PersonOutlineIcon/>
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary={`${client.nombre} ${client.apellidos} `}  
                                                secondary={`Número: ${client.num_telefonico}`}
                                            />
                                        </ListItem>
                                    ) : (
                                        <Typography>Sin cliente</Typography>
                                    ) }
                                </List>
                            </Grid>
                            <Grid item xs={12}  md={6} lg={4} >
                                <Typography component='h3' variant='h6' style={{marginBottom:20}} >Acciones</Typography>
                                <Button color='primary' 
                                    onClick={()=>redirectTo(`/editar-proyecto/${params.id}`)}
                                    variant='contained' 
                                    fullWidth startIcon={
                                    <EditIcon/>
                                } 
                                    style={{marginBottom:18}}
                                > Editar </Button>
                                <Button color='secondary' 
                                    variant='contained'  
                                    onClick={()=>setOpenDeleteDialog(true)}
                                    fullWidth startIcon={
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
                        <FormNewTask project={project} />
                   </Collapse>
                
                {tasks.length>0? (
                    <CardTaskList tasksArray={tasks} />
                ):(
                    <Typography>Aún no cuentas con tareas</Typography>
                ) }
            </Box>
            <Dialog 
                open={openDeleteDialog}
                onClose={()=>setOpenDeleteDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <ConfirmDeleteProject
                    setOpen={setOpenDeleteDialog}
                    idProject={params.id}
                />
            </Dialog>
        </Container>
     );
}
 
export default ProjectPage;