import { Container } from "@material-ui/core";
import React from "react";
import CardProjectList from "./CardProjectList";
import useProjects from "../../lib/hooks/useProjects";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
const AllProjects = () => {
  const projects = useProjects();

  return (
    <Layout>
      <Container component="main">
        <Heading content="Proyectos" />
        <CardProjectList projectsArray={projects} />
      </Container>
    </Layout>
  );
};

export default AllProjects;
