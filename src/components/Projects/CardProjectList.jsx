import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CardProjectItem from "./CardProjectItem";
const CardProjectList = ({ projectsArray }) => {
  if (!projectsArray.length)
    return <Typography>Aún no hay proyectos</Typography>;
  return (
    <Grid container spacing={3}>
      {projectsArray.map((project) => (
        <Grid key={project.id} item xs={12} md={6} lg={4}>
          <CardProjectItem project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardProjectList;
