import {
  LinearProgress,
  List,
  ListSubheader,
  makeStyles,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GradeIcon from "@material-ui/icons/Grade";
import ListIcon from "@material-ui/icons/List";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useAuthState from "../../lib/hooks/useAuthState";
import Menu from "./menu/Menu";
import CustomMenuItem from "./menu/CustomMenuItem";
import permissions from "../../lib/permissions";
import { unionArrays } from "../../lib/functions/functions";
const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    height: "100%",
  },
}));
const Sidebar = () => {
  const { logOut, user } = useAuthState();
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {user ? `Hola ${user?.nombre}` : <LinearProgress />}
        </ListSubheader>
      }
      className={classes.sidebar}
    >
      {/**Lista de proyectos *************************************************/}
      <Menu title="Proyectos" icon={WorkIcon}>
        <CustomMenuItem title="Todos" url="/proyectos" icon={ListIcon} />
        <CustomMenuItem
          justRols={permissions.project.rolesToPost}
          title="Agregar nuevo"
          url="/nuevo-proyecto"
          icon={AddCircleIcon}
        />
      </Menu>

      {/**Menu de empleados *************************************************/}
      <Menu
        title="Empleados"
        icon={AccountBoxIcon}
        justRols={unionArrays(
          permissions.employee.rolesToGetAll,
          permissions.employee.rolesToPost
        )}
      >
        <CustomMenuItem
          justRols={permissions.employee.rolesToGetAll}
          title="Todos"
          url="/empleados"
          icon={ListIcon}
        />
        <CustomMenuItem
          justRols={permissions.employee.rolesToPost}
          title="Agregar nuevo"
          url="/nuevo-empleado"
          icon={AddCircleIcon}
        />
      </Menu>

      {/**Menu de clientes *************************************************/}
      <Menu
        title="Clientes"
        icon={GradeIcon}
        justRols={unionArrays(
          permissions.client.rolesToGetAll,
          permissions.client.rolesToPost
        )}
      >
        <CustomMenuItem
          justRols={permissions.client.rolesToGetAll}
          title="Todos"
          url="/clientes"
          icon={ListIcon}
        />
        <CustomMenuItem
          justRols={permissions.client.rolesToPost}
          title="Agregar nuevo"
          url="/nuevo-cliente"
          icon={AddCircleIcon}
        />
      </Menu>

      {user && (
        <>
          <Divider />
          <Box paddingX={2} paddingTop={2}>
            <Button
              startIcon={<ExitToAppIcon />}
              onClick={logOut}
              color="primary"
              fullWidth={true}
              variant="contained"
            >
              Cerrar sesión
            </Button>
          </Box>
        </>
      )}
    </List>
  );
};

export default Sidebar;
