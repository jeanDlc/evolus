import axios from 'axios';
const url=`${process.env.REACT_APP_API}/empleados`;

export const getEmployees=async()=>{
    const res= await axios(url);
    return res.data;
}
export const getEmployeeById=async(id)=>{
    const res=await axios(`${url}/${id}`);
    return res.data;
}
export const newEmployee=async(employee)=>{
    const res=await axios.post(url, employee);
    return res.data;
}
export const updateEmployee=async(id, employee)=>{
    const res=await axios.put(`${url}/${id}`, employee);
    return res.data;
}
export const deleteEmployee=async(id)=>{
    const res=await axios.delete(`${url}/${id}`);
    return res.data;
}