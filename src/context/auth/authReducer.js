import { LOGIN, LOGIN_ERROR } from "./types";
import { toast } from "react-toastify";
export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user-token", action.payload);
      return {
        ...state,
        token: action.payload,
        authenticated: true,
      };
    case LOGIN_ERROR:
      toast.error(action.payload.msg);
      localStorage.removeItem("user-token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: false,
      };
    default:
      return state;
  }
};
