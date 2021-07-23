import React, { useState, useEffect } from "react";
import { getClientById } from "../services/client";
const useOneClient = (idClient) => {
  const [client, setClient] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    let isMounted = true;
    getClientById(idClient)
      .then((res) => {
        isMounted && setClient(res);
      })
      .catch((err) => {
        if (isMounted) {
          setErrorMessage(err.response?.data?.error || "Ocurrió un error");
          setError(true);
        }
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return {
    client,
    error,
    setClient,
    setError,
    errorMessage,
    setErrorMessage,
    loading,
  };
};

export default useOneClient;
