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
  Dialog,
} from "@material-ui/core";
import { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CircularProgress } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import ConfirmDeleteClient from "./ConfirmDeleteCliente";
import useOneClient from "../../lib/hooks/useOneClient";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import usePermissions from "../../lib/hooks/usePermissions";
const ClientPage = () => {
  const { myPermissions } = usePermissions();
  const { push } = useHistory();
  const [open, setOpen] = useState(false);
  const params = useParams();
  const idClient = params.id;
  const { error, client, errorMessage, loading } = useOneClient(idClient);
  useEffect(() => {
    if (error) {
      toast.error(errorMessage || "Error");
      push("/*"); //redirect to 404
    }
  }, [error]);

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
                  {`${client.nombre}  ${client.apellidos}`}
                </Typography>
                <Box display="flex" justifyContent="center" marginBottom={1}>
                  <StarIcon style={{ marginRight: 8 }} />
                  <Typography align="center" gutterBottom>
                    Cliente
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
                          secondary={client.nombre}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Apellido"
                          secondary={client.apellidos}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Teléfono"
                          secondary={client.num_telefonico}
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
                          secondary={client.email}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <DataUsageIcon />
                        </ListItemIcon>
                        <ListItemText primary="RUC" secondary={client.ruc} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Dirección"
                          secondary={client.direccion}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container spacing={2} style={{ marginBottom: 5 }}>
                  {myPermissions?.ToUpdateClient && (
                    <Grid item md={6}>
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        component={Link}
                        to={`/actualizar-cliente/${client.id}`}
                        startIcon={<EditIcon />}
                      >
                        Editar
                      </Button>
                    </Grid>
                  )}
                  {myPermissions?.ToDeleteClient && (
                    <Grid item md={6}>
                      <Button
                        color="secondary"
                        variant="contained"
                        fullWidth
                        onClick={() => setOpen(true)}
                        startIcon={<DeleteIcon />}
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
          <ConfirmDeleteClient setOpen={setOpen} idClient={client.id} />
        </Dialog>
      </Container>
    </Layout>
  );
};

export default ClientPage;
