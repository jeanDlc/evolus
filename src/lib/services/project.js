import axios from 'axios';
const url=`${process.env.REACT_APP_API}/proyectos`
export const getProjects=async()=>{
    const res=await axios(url);
    return res.data;
}
export const getProjectById=async(id)=>{
    const res=await axios(`${url}/${id}`);
    return res.data;
}
export const getProjectTasks=async(idProject)=>{
    const res=await axios(`${url}/${idProject}/tareas`);
    return res.data;
}
export const newProject=async(project)=>{
    const res=await axios.post(url, project);
    return res.data;
}