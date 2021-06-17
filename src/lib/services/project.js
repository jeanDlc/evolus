import axios from 'axios';
const url=`${process.env.REACT_APP_API}/proyectos`
export const getProjects=async()=>{
    const res=await axios(url);
    return res.data;
}