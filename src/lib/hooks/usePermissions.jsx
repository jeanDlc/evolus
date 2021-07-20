import useAuthState from "./useAuthState";
import permissions from "../permissions";
import { capitalize } from "@material-ui/core";
import { useEffect, useState } from "react";
const usePermissions = () => {
  const { user } = useAuthState();
  const [myPermissions, setMyPermissions] = useState({});

  useEffect(() => {
    if (user) {
      //construyendo objeto de permisos
      let obj = {};
      for (const perm in permissions) {
        const key = perm;
        const values = permissions[perm];
        for (const val in values) {
          const propertie = val.replace("roles", "") + capitalize(key);
          obj[propertie] = values[val].includes(user?.RolId);
        }
      }
      setMyPermissions(obj);
    }
  }, [user]);

  //retorna un objeto con todos los permisos que el usuario tiene
  //utiliza la consola para ver el objeto
  //console.log(myPermissions);
  return { myPermissions };
};

export default usePermissions;
