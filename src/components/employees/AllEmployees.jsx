import {   Container, Typography } from '@material-ui/core';
import React from 'react';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CardEmployeeList from './CardEmployeeList';
import useEmployees from '../../lib/hooks/useEmployees';
import Layout from '../Layout/Layout';
const AllEmployees = () => {
    const employees=useEmployees();
    return ( 
        <Layout>
            <Container component='main' >
                <Typography style={{marginTop:30, marginBottom:30}} component='h1' variant='h3' align='center' >
                    <FormatListBulletedIcon fontSize='large' /> Empleados</Typography>
                
                <CardEmployeeList employeesArray={employees} />
            </Container>
        </Layout>
     );
}
 
export default AllEmployees;
