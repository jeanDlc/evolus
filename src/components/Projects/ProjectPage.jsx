import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  Dialog,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import CustomProgress from "../ui/CustomProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PaymentIcon from "@material-ui/icons/Payment";
import CardTaskList from "../Tasks/CardTaskList";
import GroupIcon from "@material-ui/icons/Group";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { toast } from "react-toastify";
import UseOneProject from "../../lib/hooks/useOneProject";
import { format } from "date-fns";
import ConfirmDeleteProject from "./ConfirmDeleteProject";
import { Link, useParams, useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import usePermissions from "../../lib/hooks/usePermissions";
const ProjectPage = () => {
  const { myPermissions } = usePermissions();
  const { push } = useHistory();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const params = useParams();

  const { client, tasks, project, error, errorMessage } = UseOneProject(
    params.id
  );
  //progreso del proyecto
  const progress =
    Math.floor(
      (tasks.filter((task) => task.estado).length * 100) / tasks.length
    ) || 0;
  useEffect(() => {
    if (error) {
      push("/proyectos");
      toast.error(errorMessage || "Error");
    }
  }, [error]);

  if (!project) return "Loading...";
  return (
    <Layout>
      <Container component="main" style={{ width: "100%" }}>
        <Card style={{ marginTop: 30, width: "100%" }}>
          <CardContent>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              gutterBottom
              className="bold capitalize"
            >
              {project.nombre}
            </Typography>
            <Typography align="center" className="mb-4">
              Proyecto
            </Typography>
            <Divider />
            <Typography
              style={{ marginTop: 20 }}
              className="bold"
              gutterBottom
              component="h3"
              variant="h6"
            >
              Descripción
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {project.descripcion}
            </Typography>

            <Box component="section" marginY={2}>
              <Typography className="bold mb-5" component="h3" variant="h6">
                Progreso {progress} %
              </Typography>
              <CustomProgress progress={progress} />
              <Box
                display="flex"
                alignItems="center"
                marginTop={1}
                justifyContent="space-between"
              >
                <Typography color="textSecondary">
                  {format(new Date(project.fecha_inicio), "yyyy-MM-dd")}
                </Typography>
                <Typography color="textSecondary">
                  {" "}
                  {format(new Date(project.fecha_fin), "yyyy-MM-dd")}
                </Typography>
              </Box>
            </Box>
            <Grid container component="section" spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography component="h3" variant="h6" className="bold">
                  Detalles
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Monto" secondary={project.monto} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DirectionsCarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Matrícula"
                      secondary={project.num_matricula}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Pagado?"
                      secondary={project.pagado ? "Sí" : "No"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography component="h3" variant="h6" className="bold">
                  Equipo
                </Typography>
                <List>
                  {project?.Empleados?.length >= 1 ? (
                    project?.Empleados?.map((employee) => (
                      <ListItem
                        component={Link}
                        to={`/empleado/${employee.id}`}
                        button
                        key={employee.id}
                      >
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={employee.Rol.nombre}
                          secondary={`${employee.nombre} ${employee.apellidos} `}
                        />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>Aún no hay empleados</ListItem>
                  )}
                </List>
                <List>
                  <Typography component="h3" variant="h6" className="bold">
                    Cliente
                  </Typography>
                  {client ? (
                    <ListItem
                      button
                      component={Link}
                      to={`/cliente/${client.id}`}
                    >
                      <ListItemIcon>
                        <PersonOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${client.nombre} ${client.apellidos} `}
                        secondary={`Número: ${client.num_telefonico}`}
                      />
                    </ListItem>
                  ) : (
                    <Typography>Sin cliente</Typography>
                  )}
                </List>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography component="h3" variant="h6" className="bold mb-4">
                  Acciones
                </Typography>
                {myPermissions.ToAddEmployeesToProject && (
                  <Button
                    component={Link}
                    to={`/proyecto/${project.id}/empleados`}
                    variant="contained"
                    fullWidth
                    style={{ marginBottom: 18 }}
                    startIcon={<GroupIcon />}
                  >
                    Designar empleados
                  </Button>
                )}
                {myPermissions.ToUpdateProject && (
                  <Button
                    component={Link}
                    to={`/editar-proyecto/${params.id}`}
                    color="primary"
                    variant="contained"
                    fullWidth
                    startIcon={<EditIcon />}
                    style={{ marginBottom: 18 }}
                  >
                    Editar
                  </Button>
                )}
                {myPermissions.ToDeleteProject && (
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => setOpenDeleteDialog(true)}
                    fullWidth
                    startIcon={<DeleteIcon />}
                  >
                    Eliminar
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box component="section" marginY={10}>
          <Typography component="h3" variant="h4" gutterBottom>
            <FormatListBulletedIcon /> Tareas
          </Typography>
          {myPermissions.ToPostTask && (
            <Button
              style={{ marginBottom: 15 }}
              startIcon={<AddCircleIcon />}
              component={Link}
              to={`/nueva-tarea?idProject=${project.id}`}
              variant="contained"
              color="primary"
            >
              Nueva tarea
            </Button>
          )}

          {tasks.length > 0 ? (
            <CardTaskList tasksArray={tasks} />
          ) : (
            <Typography>Aún no cuentas con tareas</Typography>
          )}
        </Box>
        <Dialog
          open={openDeleteDialog}
          onClose={() => setOpenDeleteDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ConfirmDeleteProject
            setOpen={setOpenDeleteDialog}
            idProject={params.id}
          />
        </Dialog>
      </Container>
    </Layout>
  );
};

export default ProjectPage;
