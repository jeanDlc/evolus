import { useState, useEffect } from "react";
import { getTaskById } from "../services/task";
const useOneTask = (idTask) => {
  const [task, setTask] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    getTaskById(idTask)
      .then((res) => {
        if (isMounted) setTask(res);
      })
      .catch((err) => {
        if (isMounted) {
          setErrorMessage(err.response?.data?.error || "Error");
          setError(true);
        }
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return { task, setTask, error, setError, errorMessage, loading };
};

export default useOneTask;
