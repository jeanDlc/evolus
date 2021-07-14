import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const useAuthState = () => {
  const { logIn, token, authenticated, user } = useContext(AuthContext);
  return { logIn, token, authenticated, user };
};

export default useAuthState;
