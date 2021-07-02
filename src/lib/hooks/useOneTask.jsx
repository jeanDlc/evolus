import { useState,useEffect } from 'react';
import { getTaskById } from '../services/task';
const useOneTask = (idTask) => {
    const [task,setTask]=useState({});
    const [error,setError]=useState(false);
    useEffect(()=>{
        let isMounted=true;
        getTaskById(idTask)
        .then(res=>{
            if(isMounted) setTask(res)
        })
        .catch(err=>{
            if(isMounted) setError(true)
        })
        return ()=>isMounted=false;
    },[]);
    return {task,setTask,error,setError}
}
 
export default useOneTask;