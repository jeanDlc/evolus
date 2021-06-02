import { Box, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
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
const ProjectPage = () => {
    const params=useParams();
    const idProyecto= params.id;
    console.log(idProyecto);
    return ( 
        <Container component='main' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h3' align='center' style={{marginBottom:35}}  >Proyecto: Cambiar llanta</Typography>
                    <Typography gutterBottom>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    <Typography gutterBottom>Amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    
                    <Box component='section'  marginY={2} >
                        <Typography style={{marginBottom:15}} component='h3' variant='h6'  >Progreso</Typography>
                        <ProjectProgress progress={70} />
                        <Box display='flex' alignItems='center' marginTop={1} justifyContent='space-between' >
                            <Typography color='textSecondary' > 2 enero 2021 </Typography>
                            <Typography color='textSecondary' > 10 marzo 2021 </Typography>
                        </Box>
                    </Box>
                    <Grid container component='section' >
                            <Grid  item md={6} >
                                <Typography component='h3' variant='h6' >Detalles</Typography>
                                <List>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <MonetizationOnIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='Monto: S/. 320' />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <DirectionsCarIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='Matrícula: 32135351' />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon  >
                                            <PaymentIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='No pagado ' />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={6} >
                                <Typography component='h3' variant='h6' >Equipo</Typography>
                                <List>
                                    <ListItem button>
                                        <ListItemIcon  >
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='Jorge Salinas' />
                                    </ListItem>
                                    <ListItem button>
                                         <ListItemIcon>
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='Juan Perez' />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText secondary='Ana montoya ' />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
            <Box component='section' marginY={10} >
                <Typography component='h3' variant='h4' gutterBottom > 
                   <FormatListBulletedIcon/>  Tareas</Typography>
                <CardTaskList tasksArray={tasksArray.tasks} />
            </Box>
        </Container>
     );
}
 
export default ProjectPage;