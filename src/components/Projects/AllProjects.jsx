import { Container, Typography } from "@material-ui/core";
import React from "react";
import CardProjectList from "./CardProjectList";
import useProjects from "../../lib/hooks/useProjects";
import Layout from "../Layout/Layout";
const AllProjects = () => {
  const projects = useProjects();

  return (
    <Layout>
      <Container component="main">
        <Typography
          style={{ marginTop: 30, marginBottom: 30 }}
          component="h1"
          variant="h3"
          align="center"
        >
          {" "}
          Lista de Proyectos
        </Typography>
        <CardProjectList projectsArray={projects} />
      </Container>
    </Layout>
  );
};

export default AllProjects;
