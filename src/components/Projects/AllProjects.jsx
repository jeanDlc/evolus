import {  Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import projectArrayJson from '../../lib/projectArray.json';
import CardProjectList from './CardProjectList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import useProjects from '../../lib/hooks/useProjects';
const AllProjects = () => {
    const projects=useProjects();
    
    return ( 
        <>
            <Container component='main' >
                <Typography style={{marginTop:30, marginBottom:30}} component='h1' variant='h3' align='center' >
                    <FormatListBulletedIcon fontSize='large' /> Lista de Proyectos</Typography>
                <CardProjectList projectsArray={projects} />
            </Container>
        </>
     );
}
 
export default AllProjects;