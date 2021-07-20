import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
  Dialog,
  Box,
  Grid,
  Switch,
  FormControlLabel,
  CircularProgress,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useOneTask from "../../lib/hooks/useOneTask";
import ConfirmDeleteTask from "./ConfirmDeleteTask";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import { updateTaskState } from "../../lib/services/task";
import { useHistory } from "react-router-dom";
import usePermissions from "../../lib/hooks/usePermissions";
const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: "bold",
  },
  title: {
    marginTop: 18,
    marginBottom: 50,
  },
}));
const TaskPage = () => {
  const { myPermissions } = usePermissions();

  const { push } = useHistory();
  const [openDelete, setOpenDelete] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const params = useParams();
  const { task, error, errorMessage } = useOneTask(params.id);

  useEffect(() => {
    if (error) {
      toast.error(errorMessage || "Error");
      push("/*"); //redirect to 404
    }
  }, [error]);
  useEffect(() => {
    setDone(task?.estado === true);
  }, [task]);
  const handleTaskEstado = () => {
    const estado = !done;
    setDone(!done);
    setLoading(true);
    updateTaskState(task?.id, { estado })
      .then((res) => {
        toast.success(res.msg || "Éxito");
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Ocurrió un error");
        push("/proyectos");
      })
      .then(() => setLoading(false));
  };

  return (
    <Layout>
      <Container maxWidth="sm" component="main">
        <Card style={{ marginTop: 30 }}>
          <CardContent>
            <Typography
              className={classes.title}
              component="h2"
              variant="h4"
              align="center"
            >
              <span className={classes.bold}>Tarea: </span> {task.nombre}
            </Typography>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  className={classes.bold}
                  component="h3"
                  variant="h6"
                  gutterBottom
                >
                  Estado
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={3}>
                  {done ? (
                    <>
                      <DoneIcon color="secondary" style={{ marginRight: 10 }} />
                      <Typography color="textSecondary">Terminado</Typography>
                    </>
                  ) : (
                    <>
                      <WarningIcon color="error" style={{ marginRight: 10 }} />
                      <Typography color="textSecondary">
                        Sin terminar
                      </Typography>
                    </>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {loading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  myPermissions.ToUpdateStateTask && (
                    <FormControlLabel
                      control={
                        <Switch
                          checked={done}
                          onChange={handleTaskEstado}
                          name="estado"
                          color="secondary"
                        />
                      }
                      label={done ? "Terminado" : "No terminado"}
                    />
                  )
                )}
              </Grid>
            </Grid>

            <Typography
              className={classes.bold}
              component="h3"
              variant="h6"
              gutterBottom
            >
              Descripción
            </Typography>
            <Typography color="textSecondary" style={{ marginBottom: 18 }}>
              {task.descripcion}
            </Typography>
            {myPermissions?.ToUpdateTask && (
              <Button
                component={Link}
                to={`/editar-tarea/${params.id}`}
                fullWidth
                color="primary"
                variant="contained"
                style={{ marginBottom: 10 }}
                startIcon={<EditIcon />}
              >
                Editar
              </Button>
            )}
            {myPermissions?.ToDeleteTask && (
              <Button
                color="secondary"
                onClick={() => setOpenDelete(true)}
                variant="contained"
                fullWidth
                startIcon={<DeleteIcon />}
              >
                Eliminar
              </Button>
            )}

            <Dialog
              open={openDelete}
              onClose={() => setOpenDelete(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <ConfirmDeleteTask setOpen={setOpenDelete} task={task} />
            </Dialog>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default TaskPage;
