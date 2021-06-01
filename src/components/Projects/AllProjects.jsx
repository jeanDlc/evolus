import {  Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import projectArrayJson from '../../lib/projectArray.json';
import CardProjectList from './CardProjectList';

const AllProjects = () => {
    const [projectList, setProjectList]=useState([]);
    useEffect(()=>{
        setProjectList(projectArrayJson.proyectos)
    })
    return ( 
        <>
            <Container component='main' >
                <Typography style={{marginTop:20, marginBottom:20}} component='h1' variant='h3' align='center' >Lista de Proyectos</Typography>
                <CardProjectList projectsArray={projectList} />
            </Container>
        </>
     );
}
 
export default AllProjects;