import React from 'react';
import { Grid } from '@material-ui/core';
import CardClientItem from './CardClientItem';

const CardClientList = ({clientsArray}) => {
    console.log(clientsArray);
    return (

        <Grid container spacing={3} >
            {clientsArray.map(client=>(
                <Grid key={client.idCliente} item md={6}  lg={4} >
                    <CardClientItem client={client} />
                </Grid>
            ))}
            
        </Grid>
    );
}
 
export default CardClientList;