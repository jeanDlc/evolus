import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardClientList from "./CardClientList";
import { getClients } from "../../lib/services/client";
import Layout from "../Layout/Layout";
const AllClients = () => {
  const [clientList, setClientList] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getClients()
      .then((res) => {
        if (isMounted) setClientList(res);
      })
      .catch((error) => console.log(error));
    return () => (isMounted = false);
  }, []);
  return (
    <Layout>
      <Container component="main">
        <Typography
          style={{ marginTop: 30, marginBottom: 30 }}
          component="h1"
          variant="h3"
          align="center"
        >
          Clientes
        </Typography>

        <CardClientList clientsArray={clientList} />
      </Container>
    </Layout>
  );
};

export default AllClients;
