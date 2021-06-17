import  {useState,useEffect} from 'react';
import {getRoles} from '../services/rol';
const useRoles = () => {
    const [roles,setRoles]=useState([]);
    useEffect(()=>{
        let isMounted=true;
        getRoles()
        .then(res=>{
            if(isMounted) setRoles(res)
        })
        .catch(error=>{
            console.log(error.response || error);
        })
        return ()=>isMounted=false;
    },[])
    return roles;
}
 
export default useRoles;