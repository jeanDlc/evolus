import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const useAuthState = () => {
  const { logIn, token, authenticated, user, getAuthUser, loading } =
    useContext(AuthContext);
  return { logIn, token, authenticated, user, getAuthUser, loading };
};

export default useAuthState;
