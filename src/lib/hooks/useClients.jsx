import { useState, useEffect } from "react";
import { getClients } from "../services/client";
const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorClients, setErrorClients] = useState(true);
  useEffect(() => {
    let isMounted = true;
    getClients()
      .then((res) => {
        if (isMounted) setClients(res);
      })
      .catch((error) => {
        console.log(error);
        if (isMounted) setErrorClients(true);
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return { clients, errorClients, setErrorClients, loading };
};

export default useClients;
