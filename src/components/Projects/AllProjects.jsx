import { Container, Typography } from "@material-ui/core";
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
        {projects.length ? (
          <CardProjectList projectsArray={projects} />
        ) : (
          <Typography>Aún no hay proyectos</Typography>
        )}
      </Container>
    </Layout>
  );
};

export default AllProjects;
