import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const useAuthState = () => {
  const { logIn, token, authenticated, user, getAuthUser, loading, logOut } =
    useContext(AuthContext);
  return { logIn, token, authenticated, user, getAuthUser, loading, logOut };
};

export default useAuthState;
