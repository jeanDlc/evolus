import axios from 'axios';

const url=`${process.env.REACT_APP_API}/roles`;
export const getRoles=async()=>{
    const res=await axios(url);
    return res.data;
}