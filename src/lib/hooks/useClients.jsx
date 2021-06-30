import React, { useState, useEffect } from 'react';
import {getClients} from '../services/client';
const useClients = () => {
    const [clients, setClients]=useState([]);
    const [errorClients,setErrorClients]=useState(false);
    useEffect(()=>{
        let isMounted=true;
        getClients()
        .then(res=>{
            if(isMounted) setClients(res)
        })
        .catch(error=>{
            console.log(error);
            if(isMounted) setErrorClients(true);
        })
        return ()=>isMounted=false;
    },[]);
    return {clients,errorClients,setErrorClients};
}
 
export default useClients;