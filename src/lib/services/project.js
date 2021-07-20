import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
export const getProjects = async () => {
  tokenAuth();
  const res = await axiosClient("/proyectos");
  return res.data;
};
export const getProjectById = async (idProject) => {
  tokenAuth();
  const res = await axiosClient(`/proyectos/${idProject}`);
  return res.data;
};
export const getProjectTasks = async (idProject) => {
  tokenAuth();
  const res = await axiosClient(`/proyectos/${idProject}/tareas`);
  return res.data;
};
export const newProject = async (project) => {
  tokenAuth();
  const res = await axiosClient.post("/proyectos", project);
  return res.data;
};

export const updateProject = async (idProject, project) => {
  tokenAuth();
  const res = await axiosClient.put(`/proyectos/${idProject}`, project);
  return res.data;
};
export const deleteProject = async (idProject) => {
  tokenAuth();
  const res = await axiosClient.delete(`/proyectos/${idProject}`);
  return res.data;
};
export const postProjectEmployees = async (idProject, idEmployeesList) => {
  tokenAuth();
  const res = await axiosClient.post(
    `/proyectos/${idProject}/empleados`,
    idEmployeesList
  );
  return res.data;
};
export const newProjectTask = async (idProject, task) => {
  tokenAuth();
  const res = await axiosClient.post(`/proyectos/${idProject}/tareas`, task);
  return res.data;
};
