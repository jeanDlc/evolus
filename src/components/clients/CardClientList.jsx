import React from "react";
import { Grid } from "@material-ui/core";
import CardClientItem from "./CardClientItem";

const CardClientList = ({ clientsArray }) => {
  return (
    <Grid container spacing={3}>
      {clientsArray.map((client) => (
        <Grid key={client.id} item xs={12} sm={6} xl={4}>
          <CardClientItem client={client} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardClientList;
