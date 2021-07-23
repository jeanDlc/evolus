import { Container, Typography, CircularProgress } from "@material-ui/core";
import CardClientList from "./CardClientList";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
import useClients from "../../lib/hooks/useClients";
const AllClients = () => {
  const { clients, loading } = useClients();
  return (
    <Layout>
      <Container component="main">
        <Heading content="Clientes" component="h2" />

        {loading ? (
          <div>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <CardClientList clientsArray={clients} />
        )}
      </Container>
    </Layout>
  );
};

export default AllClients;
