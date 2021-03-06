import {
  Container,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
  FormControl,
  Button,
  FormHelperText,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import Layout from "../Layout/Layout";
import useEmployees from "../../lib/hooks/useEmployees";
import UseOneProject from "../../lib/hooks/useOneProject";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { postProjectEmployees } from "../../lib/services/project";
import { toast } from "react-toastify";
const FormEmployeesForProject = () => {
  const [selectedIdEmployees, setSelectedIdEmployees] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { id: projectId } = useParams();
  const { push } = useHistory();
  const { employees, loading } = useEmployees();
  const { project } = UseOneProject(projectId);
  useEffect(() => {
    let isMounted = true;
    //obtener los empleados para rellenar el checkbox
    if (project?.Empleados) {
      isMounted &&
        setSelectedIdEmployees(project.Empleados.map((emp) => emp.id));
    }
    return () => (isMounted = false);
  }, [project]);
  //manejar el state cuando cambia el checkbox
  const handleChange = (e) => {
    const idEmp = e.target.value;
    if (selectedIdEmployees.includes(idEmp)) {
      removeId(idEmp);
    } else {
      addId(idEmp);
    }
  };
  //agregar un id al state
  const addId = (id) => {
    setSelectedIdEmployees([...selectedIdEmployees, id]);
  };
  //remover un id del state
  const removeId = (id) => {
    setSelectedIdEmployees([
      ...selectedIdEmployees.filter((existentId) => existentId != id),
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIdEmployees.length === 0) return false;
    setLoadingSubmit(true);
    postProjectEmployees(projectId, { empleados: selectedIdEmployees })
      .then((res) => {
        toast.success(res.msg || "Éxito");
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Ocurrió un error");
      })
      .then(() => {
        setLoadingSubmit(false);
        push(`/proyecto/${projectId}`);
      });
  };
  return (
    <Layout>
      <Container maxWidth="sm" style={{ marginTop: 50 }}>
        <Card component="main">
          <CardContent component="form" onSubmit={handleSubmit}>
            <Typography component="h2" variant="h4">
              Elige a los mecánicos para el proyecto
            </Typography>
            <FormControl
              error={selectedIdEmployees.length === 0}
              component="fieldset"
              color="secondary"
              margin="normal"
            >
              <FormLabel component="legend">Mecánicos</FormLabel>
              <FormGroup>
                {loading && (
                  <div className="my-4">
                    <CircularProgress color="secondary" />
                  </div>
                )}
                {employees
                  .filter((employee) => employee.RolId === 4)
                  .map((emp) => (
                    <FormControlLabel
                      key={emp.id}
                      control={
                        <Checkbox
                          onChange={handleChange}
                          value={emp.id}
                          checked={selectedIdEmployees.includes(emp.id)}
                        />
                      }
                      label={`${emp.nombre} ${emp.apellidos}`}
                    />
                  ))}
              </FormGroup>
              <FormHelperText>ELige al menos un mecánico</FormHelperText>
            </FormControl>
            <Button
              disabled={loadingSubmit}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Guardar cambios
            </Button>
            {loadingSubmit && <LinearProgress className="mt-4" />}
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default FormEmployeesForProject;
