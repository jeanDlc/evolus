import {   Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import employeesArrayJson from '../../lib/employeesArray.json';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CardEmployeeList from './CardEmployeeList';

const AllEmployees = () => {
    const [employeeList, setEmployeeList]=useState([]);
    useEffect(()=>{
        setEmployeeList(employeesArrayJson.empleados)
    })
    return ( 
        <>
            <Container component='main' >
                <Typography style={{marginTop:30, marginBottom:30}} component='h1' variant='h3' align='center' >
                    <FormatListBulletedIcon fontSize='large' /> Empleados</Typography>
                
                <CardEmployeeList employeesArray={employeeList} />
            </Container>
        </>
     );
}
 
export default AllEmployees;
