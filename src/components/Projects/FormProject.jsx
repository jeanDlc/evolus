import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import { format } from "date-fns";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useClients from "../../lib/hooks/useClients";
import { useState, useEffect } from "react";
import {
  newProject,
  getProjectById,
  updateProject,
} from "../../lib/services/project";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import useRedirecTo from "../../lib/hooks/useRedirecTo";
import Layout from "../Layout/Layout";
const FormProject = () => {
  const params = useParams();
  const redirectTo = useRedirecTo();
  const today = format(new Date(), "yyyy-MM-dd");
  const initialState = {
    nombre: "",
    fecha_inicio: today,
    fecha_fin: today,
    descripcion: "",
    num_matricula: "",
    monto: 0,
    empleados: [],
    ClienteId: "",
  };
  const [edicion, setEdicion] = useState(false);
  const [project, setProject] = useState(initialState);
  const { clients } = useClients();
  useEffect(() => {
    let isMounted = true;
    if (params.id) {
      //estamos en edición
      if (isMounted) setEdicion(true);
      //buscar el proyecto que queremos editar
      getProjectById(params.id)
        .then((res) => {
          if (!isMounted) return;
          setProject({
            nombre: res.nombre,
            fecha_inicio: format(new Date(res.fecha_inicio), "yyyy-MM-dd"),
            fecha_fin: format(new Date(res.fecha_fin), "yyyy-MM-dd"),
            descripcion: res.descripcion,
            num_matricula: res.num_matricula,
            monto: res.monto,
            empleados: res.Empleados.map((emp) => emp.id),
            ClienteId: res.ClienteId,
            pagado: res.pagado,
          });
        })
        .catch((error) => {
          toast.error(error.response?.data?.error || "Error");
        });
    } else {
      setProject(initialState);
    }
    return () => (isMounted = false);
  }, [params.id]);
  const handleChange = (e) => {
    e.preventDefault();
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (params.id) {
        //editar proyecto
        res = await updateProject(params.id, project);
        redirectTo(`/proyecto/${params.id}`);
      } else {
        //nuevo proyecto
        res = await newProject(project);
        redirectTo("/proyectos");
      }
      toast.success(res.msg || "Éxito");
    } catch (error) {
      if (error.response?.data?.errores) {
        const arrayErrors = error.response.data.errores;
        arrayErrors.forEach((err) => toast.error(err.msg));
      } else {
        toast.error(error.response?.data?.error || "Ocurrió un error");
      }
    }
  };
  return (
    <Layout>
      <Container maxWidth="md" style={{ marginTop: 50 }}>
        <Card component="main" style={{ marginBottom: 28 }}>
          <CardContent component="form" onSubmit={handleSubmit}>
            <Typography
              style={{ fontWeight: "bold" }}
              component="h1"
              variant="h4"
              gutterBottom
            >
              {edicion ? "Editar proyecto" : "Nuevo Proyecto"}
            </Typography>
            <Typography gutterBottom>
              Llena el formulario para{" "}
              {edicion ? "editar el proyecto" : "crear un nuevo proyecto"}
            </Typography>
            <FormControl color="secondary" margin="normal" fullWidth={true}>
              <InputLabel htmlFor="nombre">Nombre del proyecto</InputLabel>
              <Input
                id="nombre"
                onChange={handleChange}
                value={project.nombre}
                name="nombre"
                type="text"
              />
            </FormControl>
            <FormControl color="secondary" margin="normal" fullWidth={true}>
              <InputLabel htmlFor="descripcion">
                Descripción del proyecto
              </InputLabel>
              <Input
                multiline
                rows={10}
                onChange={handleChange}
                value={project.descripcion}
                id="descripcion"
                name="descripcion"
                type="text"
              />
            </FormControl>
            <Grid
              container
              spacing={3}
              style={{ marginBottom: 15, marginTop: 10 }}
            >
              <Grid item xs={12} md={6}>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    id="fecha_inicio"
                    label="Inicio de proyecto"
                    type="date"
                    name="fecha_inicio"
                    color="secondary"
                    value={project.fecha_inicio}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    aria-describedby="helper-fecha-inicio"
                  />
                  <FormHelperText id="helper-fecha-inicio">
                    Fecha de inicio del proyecto
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    id="fecha_fin"
                    label="Fin de proyecto"
                    type="date"
                    name="fecha_fin"
                    color="secondary"
                    value={project.fecha_fin}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    aria-describedby="helper-fecha-inicio"
                  />
                  <FormHelperText id="helper-fecha-inicio">
                    Fecha de fin del proyecto
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl color="secondary" margin="normal" fullWidth={true}>
                  <InputLabel htmlFor="num_matricula">
                    Número de matrícula
                  </InputLabel>
                  <Input
                    startAdornment={
                      <InputAdornment position="start">
                        <DirectionsCarIcon />
                      </InputAdornment>
                    }
                    onChange={handleChange}
                    value={project.num_matricula}
                    id="num_matricula"
                    name="num_matricula"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl color="secondary" margin="normal" fullWidth={true}>
                  <InputLabel htmlFor="monto">Monto a pagar</InputLabel>
                  <Input
                    startAdornment={
                      <InputAdornment position="start">
                        <MonetizationOnIcon />
                      </InputAdornment>
                    }
                    onChange={handleChange}
                    value={project.monto}
                    id="monto"
                    name="monto"
                    type="number"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl color="secondary" margin="normal" fullWidth={true}>
                  <InputLabel id="label-select-client">Cliente</InputLabel>
                  <Select
                    labelId="label-select-client"
                    onChange={handleChange}
                    value={project.ClienteId}
                    name="ClienteId"
                  >
                    {clients.map((client) => (
                      <MenuItem key={client.id} value={client.id}>
                        {client.nombre} {client.apellidos}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              startIcon={edicion ? <EditIcon /> : <AddCircleIcon />}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Guardar {edicion && "cambios"}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default FormProject;
