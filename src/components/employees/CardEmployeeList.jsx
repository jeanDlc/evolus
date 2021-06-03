import { Grid } from '@material-ui/core';
import React from 'react';
import CardEmployeeItem from './CardEmployeeItem';
const CardEmployeeList =     ({employeesArray}) => {
    return ( 
        <Grid container spacing={3} >
            {employeesArray.map(employee=>(
                <Grid key={employee.idEmpleado} item md={6}  lg={4} >
                    <CardEmployeeItem employee={employee} />
                </Grid>
            ))}
            
        </Grid>
     );
}
 
export default CardEmployeeList;