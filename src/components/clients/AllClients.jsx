import {   Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CardClientList from './CardClientList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {getClients} from '../../lib/services/client';
const AllClients = () => {
    const [clientList, setClientList]=useState([]);
    useEffect(()=>{
        let isMounted=true;
        getClients()
        .then(res=>{
            if(isMounted) setClientList(res)
        })
        .catch(error=>console.log(error))
        return ()=>isMounted=false;
    },[])
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