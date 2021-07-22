import { Container, Typography } from "@material-ui/core";
import CardClientList from "./CardClientList";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
import useClients from "../../lib/hooks/useClients";
const AllClients = () => {
  const { clients } = useClients();
  return (
    <Layout>
      <Container component="main">
        <Heading content="Clientes" component="h2" />
        {clients.length ? (
          <CardClientList clientsArray={clients} />
        ) : (
          <Typography>Aún no hay clientes</Typography>
        )}
      </Container>
    </Layout>
  );
};

export default AllClients;
