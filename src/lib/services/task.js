import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

export const getTaskById = async (idTask) => {
  tokenAuth();
  const res = await axiosClient(`/tareas/${idTask}`);
  return res.data;
};
export const updateTask = async (idTask, task) => {
  tokenAuth();
  const res = await axiosClient.put(`/tareas/${idTask}`, task);
  return res.data;
};
export const deleteTask = async (idTask) => {
  tokenAuth();
  const res = await axiosClient.delete(`/tareas/${idTask}`);
  return res.data;
};
