import  { useState,useEffect } from 'react';
import {getProjects} from '../services/project';
const useProjects = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        let isMounted=true;
        getProjects()
        .then(res=>{
            if(isMounted) setProjects(res)
        })
        .catch(error=>{
            console.log(error)
        });
        return ()=>isMounted=false;
    },[])
    return projects;
}
 
export default useProjects;