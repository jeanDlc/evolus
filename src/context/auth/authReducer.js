import { LOGIN, LOGIN_ERROR, AUTH_USER, AUTH_ERROR } from "./types";
import { toast } from "react-toastify";
export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user-token", action.payload);
      return {
        ...state,
        token: action.payload,
        authenticated: true,
        loading: false,
      };
    case LOGIN_ERROR:
    case AUTH_ERROR:
      toast.error(action.payload.msg);
      localStorage.removeItem("user-token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: false,
        loading: false,
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user,
        authenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
