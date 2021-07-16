import { Grid } from "@material-ui/core";
import React from "react";
import CardEmployeeItem from "./CardEmployeeItem";
const CardEmployeeList = ({ employeesArray }) => {
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
