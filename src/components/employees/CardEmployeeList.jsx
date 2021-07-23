import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CardEmployeeItem from "./CardEmployeeItem";
const CardEmployeeList = ({ employeesArray }) => {
  if (!employeesArray.length)
    return <Typography>Aún no hay empleados</Typography>;
  return (
    <Grid container spacing={3}>
      {employeesArray.map((employee) => (
        <Grid key={employee.id} item xs={12} sm={6} xl={4}>
          <CardEmployeeItem employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardEmployeeList;
