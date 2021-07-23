import { useState, useEffect } from "react";
import { getProjects } from "../services/project";
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    getProjects()
      .then((res) => {
        if (isMounted) setProjects(res);
      })
      .catch((error) => {
        console.log(error);
        isMounted && setError(true);
      })
      .then(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, []);
  return { projects, loading };
};

export default useProjects;
