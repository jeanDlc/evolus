import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@material-ui/core";
import Layout from "./Layout/Layout";
import ProjectsChart from "./Projects/ProjectsChart";
import useAuthState from "../lib/hooks/useAuthState";
import { Link } from "react-router-dom";
import empresa from "../lib/empresa.json";
import Heading from "./ui/Heading";
const Home = () => {
  const { user, logOut } = useAuthState();
  return (
    <Layout>
      <Container component="main">
        <Heading content="Bienvenido" />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  Avance de proyectos
                </Typography>
                <ProjectsChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  {user?.Rol?.nombre}
                </Typography>
                <Typography className="bold mb-4">
                  Acerca de mi puesto
                </Typography>
                <Typography>{user?.Rol?.descripcion}</Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: 15 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  Sobre Evolus
                </Typography>
                <Typography>{empresa.historia}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  Visión
                </Typography>
                <Typography>{empresa.vision}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  Misión
                </Typography>
                <Typography>{empresa.mision}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h3"
                  variant="h4"
                  className="bold"
                >
                  Hola {user?.nombre}
                </Typography>
                <Typography className="mb-4">¿Qué deseas hacer?</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} lg={6}>
                    <Button
                      fullWidth
                      component={Link}
                      to="/proyectos"
                      variant="contained"
                    >
                      A trabajar
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4} lg={6}>
                    <Button
                      fullWidth
                      component={Link}
                      to={`/empleado/${user?.id}`}
                      variant="contained"
                      color="primary"
                    >
                      Ver mi perfil
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4} lg={6}>
                    <Button
                      fullWidth
                      onClick={logOut}
                      variant="contained"
                      color="secondary"
                    >
                      Salir
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
