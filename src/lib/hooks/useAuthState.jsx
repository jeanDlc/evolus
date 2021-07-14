import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const useAuthState = () => {
  const { logIn, token, authenticated, user, getAuthUser } =
    useContext(AuthContext);
  return { logIn, token, authenticated, user, getAuthUser };
};

export default useAuthState;
