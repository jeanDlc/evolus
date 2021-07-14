import authContext from "./authContext";
import { useReducer } from "react";
import { LOGIN, LOGIN_ERROR, AUTH_USER, AUTH_ERROR, LOGOUT } from "./types";
import authReducer from "./authReducer";
import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
const AuthState = ({ children }) => {
  const initial_state = {
    user: null,
    authenticated: false,
    loading: true,
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
  const logOut = () => {
    dispatch({
      type: LOGOUT,
    });
  };
  //obtiene el usuario autenticado
  const getAuthUser = async () => {
    try {
      //poner el token en headers
      tokenAuth();
      //obtener el usuario autenticado
      const res = await axiosClient.get("/auth");
      const user = res.data;
      //colocar info de usuario en el state global
      dispatch({
        type: AUTH_USER,
        payload: { user },
      });
    } catch (error) {
      const msg = error.response?.data?.error || "Error";
      dispatch({
        type: AUTH_ERROR,
        payload: { msg },
      });
    }
  };
  return (
    <authContext.Provider
      value={{
        user: state.user,
        authenticated: state.authenticated,
        token: state.token,
        loading: state.loading,
        logIn,
        logOut,
        getAuthUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
