import { useState, useEffect } from "react";
import { getEmployees } from "../services/employees";
import { toast } from "react-toastify";
const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    getEmployees()
      .then((res) => {
        if (isMounted) setEmployees(res);
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Error");
        isMounted && setError(true);
        console.log(error.response || error);
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return { employees, loading, error };
};

export default useEmployees;
