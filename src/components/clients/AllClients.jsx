import {   Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import clientArrayJson from '../../lib/clientsArray.json';
import CardClientList from './CardClientList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const AllClients = () => {
    const [clientList, setClientList]=useState([]);
    useEffect(()=>{
        setClientList(clientArrayJson.clientes)
    })
    return ( 
        <>
            <Container component='main' >
                <Typography style={{marginTop:30, marginBottom:30}} component='h1' variant='h3' align='center' >
                    <FormatListBulletedIcon fontSize='large' /> Clientes</Typography>
                
                <CardClientList clientsArray={clientList} />
            </Container>
        </>
     );
}
 
export default AllClients;