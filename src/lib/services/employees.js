import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

export const getEmployees = async () => {
  tokenAuth();
  const res = await axiosClient("/empleados");
  return res.data;
};
export const getEmployeeById = async (id) => {
  tokenAuth();
  const res = await axiosClient(`/empleados/${id}`);
  return res.data;
};
export const newEmployee = async (employee) => {
  tokenAuth();
  const res = await axiosClient.post("/empleados", employee);
  return res.data;
};
export const updateEmployee = async (id, employee) => {
  tokenAuth();
  const res = await axiosClient.put(`/empleados/${id}`, employee);
  return res.data;
};
export const deleteEmployee = async (id) => {
  tokenAuth();
  const res = await axiosClient.delete(`/empleados/${id}`);
  return res.data;
};
