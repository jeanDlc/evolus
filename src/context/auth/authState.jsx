import authContext from "./authContext";
import { useReducer } from "react";
import { LOGIN, LOGIN_ERROR } from "./types";
import authReducer from "./authReducer";
import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
const AuthState = ({ children }) => {
  const initial_state = {
    user: null,
    authenticated: false,
    token:
      typeof window !== "undefined" ? localStorage.getItem("user-token") : null,
  };
  const [state, dispatch] = useReducer(authReducer, initial_state);
  //Inicia sesión de usuario
  const logIn = async (data) => {
    try {
      const token = await axiosClient.post("/auth", data);
      dispatch({
        type: LOGIN,
        payload: token.data,
      });
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Error";
      dispatch({
        type: LOGIN_ERROR,
        payload: { msg: errorMsg },
      });
    }
  };
  //obtiene el usuario autenticado
  const getAuthUser = async () => {
    //poner el token en headers
    tokenAuth();
    try {
      const res = await axiosClient.get("/auth");
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <authContext.Provider
      value={{
        user: state.user,
        authenticated: state.authenticated,
        token: state.token,
        logIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
