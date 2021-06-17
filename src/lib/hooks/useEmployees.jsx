import {useState, useEffect} from 'react';
import {getEmployees} from '../services/employees';
import {toast} from 'react-toastify';
const useEmployees = () => {
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
        let isMounted=true;
        getEmployees()
        .then(res=>{
            if(isMounted) setEmployees(res)
        })
        .catch(error=>{
            toast.error(error.response?.data?.error || 'Error');
            console.log(error.response || error);
        })
        return ()=>isMounted=false;
    },[]);
    return employees;
}
 
export default useEmployees;