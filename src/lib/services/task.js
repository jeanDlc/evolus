import axios from 'axios';
const url=`${process.env.REACT_APP_API}/tareas`;
export const getTaskById=async(idTask)=>{
    const res=await axios(`${url}/${idTask}`);
    return res.data;
}
export const updateTask=async(idTask,task)=>{
    const res=await axios.put(`${url}/${idTask}`,task);
    return res.data;
}
export const deleteTask=async(idTask)=>{
    const res=await axios.delete(`${url}/${idTask}`);
    return res.data;
}