import authContext from "./authContext";
import { useReducer } from "react";
import { LOGIN } from "./types";
import authReducer from "./authReducer";
const AuthState = ({ children }) => {
  const initial_state = {
    user: null,
    authenticated: false,
    token: null,
  };
  const [state, dispatch] = useReducer(authReducer, initial_state);
  const logIn = async (data) => {
    console.log(data);
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
