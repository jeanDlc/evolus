import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  CircularProgress,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Dialog,
} from "@material-ui/core";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckIcon from "@material-ui/icons/Check";
import WorkIcon from "@material-ui/icons/Work";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useOneEmployee from "../../lib/hooks/useOneEmployee";
import ConfirmDeleteEmployee from "./ConfirmDeleteEmployee";
import SecurityIcon from "@material-ui/icons/Security";
import Layout from "../Layout/Layout";
import usePermissions from "../../lib/hooks/usePermissions";
import useAuthState from "../../lib/hooks/useAuthState";

const EmployeePage = () => {
  const { myPermissions } = usePermissions();
  const { user } = useAuthState();

  const [open, setOpen] = useState(false);
  const params = useParams();
  const { employee, loading } = useOneEmployee(params.id);

  return (
    <Layout>
      <Container component="main" maxWidth="sm" style={{ width: "100%" }}>
        <Card style={{ marginTop: 30, width: "100%" }}>
          {loading ? (
            <CardContent>
              <p>Espere un momento...</p>
              <CircularProgress color="secondary" />
            </CardContent>
          ) : (
            <>
              <CardContent>
                <Typography
                  component="h2"
                  variant="h4"
                  align="center"
                  gutterBottom
                >
                  {`${employee?.nombre} ${employee?.apellidos}`}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <WorkIcon style={{ marginRight: 8 }} />
                  <Typography align="center" gutterBottom>
                    {employee?.Rol?.nombre}
                  </Typography>
                </Box>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item md={6}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Nombre"
                          secondary={employee?.nombre}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Apellido"
                          secondary={employee?.apellidos}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Teléfono"
                          secondary={employee?.num_telefonico}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="User"
                          secondary={employee?.email}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <WorkIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Cargo"
                          secondary={employee?.Rol.nombre}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item md={6}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Email"
                          secondary={employee?.email}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <DataUsageIcon />
                        </ListItemIcon>
                        <ListItemText primary="RUC" secondary={employee?.ruc} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Dirección"
                          secondary={employee?.direccion}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Activo"
                          secondary={employee?.activo ? "Sí" : "No"}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container spacing={2} style={{ marginBottom: 5 }}>
                  {employee?.id === user?.id ||
                  myPermissions?.ToUpdateEmployee ? (
                    <Grid item xs={12} md={6}>
                      <Button
                        component={Link}
                        to={`/actualizar-empleado/${employee?.id}`}
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<EditIcon />}
                      >
                        Editar
                      </Button>
                    </Grid>
                  ) : null}
                  {employee?.id === user?.id ||
                  myPermissions?.ToUpdateEmployee ? (
                    <Grid item xs={12} md={6}>
                      <Button
                        component={Link}
                        to={`/empleado/${employee?.id}/cambiar-contraseña`}
                        variant="contained"
                        fullWidth
                        startIcon={<SecurityIcon />}
                      >
                        Cambiar password
                      </Button>
                    </Grid>
                  ) : null}
                  {myPermissions.ToDeleteEmployee && (
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        startIcon={<DeleteIcon />}
                        onClick={() => setOpen(true)}
                      >
                        Eliminar
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </CardActions>
            </>
          )}
        </Card>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ConfirmDeleteEmployee idEmployee={employee?.id} setOpen={setOpen} />
        </Dialog>
      </Container>
    </Layout>
  );
};

export default EmployeePage;
