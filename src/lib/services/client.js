import axios from 'axios';
const url=`${process.env.REACT_APP_API}/clientes`;

export const getClients=async()=>{
    const clients=await axios(url);
    return clients.data;
}

export const getClientById=async(id)=>{
    const client=await axios(`${url}/${id}`);
    return client.data;
}

export const newClient=async(client)=>{
    const res=await axios.post(url, client);
    return res;
}
export const updateClient=async (id, client)=>{
    const res=await axios.put(`${url}/${id}`, client);
    return res;
}
export const deleteClient=async(id)=>{
    const res=await axios.delete(`${url}/${id}`);
    return res;
}