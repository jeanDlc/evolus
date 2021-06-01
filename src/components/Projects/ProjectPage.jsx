import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import {useParams} from 'react-router-dom';
const ProjectPage = () => {
    const params=useParams();
    const idProyecto= params.id;
    console.log(idProyecto);
    return ( 
        <Container component='main' style={{width:'100%'}} >
            <Card style={{marginTop:30, width:'100%'}} >
                <CardContent>
                    <Typography component='h2' variant='h4' align='center' gutterBottom >Proyecto: Cambiar llanta</Typography>
                    <Typography gutterBottom>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    <Typography gutterBottom>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ratione minus dolorum deserunt harum corrupti, aut eveniet doloribus corporis alias possimus error reprehenderit molestiae est inventore, voluptates ipsum voluptatem qui? </Typography>
                    <Grid container >
                        <Grid  item md={6} >
                            1
                        </Grid>
                        <Grid item md={6} >
                            2
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
     );
}
 
export default ProjectPage;