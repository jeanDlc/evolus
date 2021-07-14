import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthState from "../../lib/hooks/useAuthState";
const PrivateRoute = ({ component: Component, ...props }) => {
  const { authenticated, getAuthUser, loading, user } = useAuthState();
  useEffect(() => {
    if (!user) getAuthUser();
  }, []);
  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/iniciar-sesion" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
