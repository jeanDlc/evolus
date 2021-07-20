import { useState, useEffect } from "react";
import { getEmployeeById } from "../services/employees";
import { toast } from "react-toastify";
import useRedirecTo from "./useRedirecTo";
const useOneEmployee = (id) => {
  const redirectTo = useRedirecTo();
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    let isMounted = true;
    getEmployeeById(id)
      .then((res) => {
        if (isMounted) setEmployee(res);
      })
      .catch((error) => {
        redirectTo("/empleados");
        toast.error(error.response?.data?.error || "Error");
        console.log(error.response || error);
      });
    return () => (isMounted = false);
  }, [id]);
  return employee;
};

export default useOneEmployee;
