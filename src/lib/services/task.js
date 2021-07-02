import axios from 'axios';
const url=`${process.env.REACT_APP_API}/tareas`;
export const getTaskById=async(idTask)=>{
    const res=await axios(`${url}/${idTask}`);
    return res.data;
}