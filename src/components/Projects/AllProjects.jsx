import { Container, CircularProgress } from "@material-ui/core";
import CardProjectList from "./CardProjectList";
import useProjects from "../../lib/hooks/useProjects";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
const AllProjects = () => {
  const { projects, loading } = useProjects();
  return (
    <Layout>
      <Container component="main">
        <Heading content="Proyectos" />
        {loading ? (
          <div>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <CardProjectList projectsArray={projects} />
        )}
      </Container>
    </Layout>
  );
};

export default AllProjects;
