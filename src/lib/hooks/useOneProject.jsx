import { useState, useEffect } from "react";
import { getProjectById } from "../services/project";
const UseOneProject = (id) => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    let isMounted = true;
    getProjectById(id)
      .then((res) => {
        if (isMounted) {
          setProject(res);
          setTasks(res.Tareas);
          setClient(res.Cliente);
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response?.data?.error || "Error");
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return { project, tasks, client, error, errorMessage, loading };
};

export default UseOneProject;
