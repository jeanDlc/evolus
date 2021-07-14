import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

export const getClients = async () => {
  tokenAuth();
  const clients = await axiosClient("/clientes");
  return clients.data;
};

export const getClientById = async (id) => {
  tokenAuth();
  const client = await axiosClient(`clientes/${id}`);
  return client.data;
};

export const newClient = async (client) => {
  tokenAuth();
  const res = await axiosClient.post("/clientes", client);
  return res;
};
export const updateClient = async (id, client) => {
  tokenAuth();
  const res = await axiosClient.put(`clientes/${id}`, client);
  return res;
};
export const deleteClient = async (id) => {
  tokenAuth();
  const res = await axiosClient.delete(`clientes/${id}`);
  return res;
};
