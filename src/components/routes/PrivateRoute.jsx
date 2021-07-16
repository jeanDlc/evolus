import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthState from "../../lib/hooks/useAuthState";
import Page404 from "../Page404";
const PrivateRoute = ({
  component: Component,
  justRoles = [1, 2, 3, 4],
  ...props
}) => {
  const { authenticated, getAuthUser, loading, user } = useAuthState();
  useEffect(() => {
    if (!user) getAuthUser();
  }, []);

  if (user && !justRoles.includes(user?.RolId) && !loading) return <Page404 />;
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
