import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardClientList from "./CardClientList";
import { getClients } from "../../lib/services/client";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
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
        <Heading content="Clientes" component="h2" />

        <CardClientList clientsArray={clientList} />
      </Container>
    </Layout>
  );
};

export default AllClients;
