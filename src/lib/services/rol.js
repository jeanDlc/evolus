import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
export const getRoles = async () => {
  tokenAuth();
  const res = await axiosClient("/roles");
  return res.data;
};
