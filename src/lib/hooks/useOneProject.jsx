import React, { useState, useEffect } from 'react';
import {getProjectById} from '../services/project';
const UseOneProject = (id) => {
    const [project,setProject]=useState(null);
    const [tasks,setTasks]=useState([]);
    const [client, setClient]=useState(null);
    const [error,setError]=useState(null);
    const [errorMessage, setErrorMessage]=useState('');
    useEffect(()=>{
        let isMounted=true;
        getProjectById(id)
        .then(res=>{
            if(isMounted){
                setProject(res);
                setTasks(res.Tareas);
                setClient(res.Cliente);
            }
        })
        .catch(error=>{
            setError(true);
            setErrorMessage(error.response?.data?.error || 'Error');
        })
        return ()=>isMounted=false;
    },[]);
    return {project,tasks,client,error, errorMessage};
}
 
export default UseOneProject;