import axios from 'axios';
const url=`${process.env.REACT_APP_API}/proyectos`
export const getProjects=async()=>{
    const res=await axios(url);
    return res.data;
}
export const getProjectById=async(idProject)=>{
    const res=await axios(`${url}/${idProject}`);
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

export const updateProject=async(idProject,project)=>{
    const res=await axios.put(`${url}/${idProject}`, project);
    return res.data;
}
export const deleteProject=async(idProject)=>{
    const res=await axios.delete(`${url}/${idProject}`);
    return res.data;
}