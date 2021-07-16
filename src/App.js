import {
  useTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import FormProject from "./components/Projects/FormProject";
import AllProjects from "./components/Projects/AllProjects";
import ProjectPage from "./components/Projects/ProjectPage";
import TaskPage from "./components/Tasks/TaskPage";
import AllClients from "./components/clients/AllClients";
import ClientPage from "./components/clients/ClientPage";
import AllEmployees from "./components/employees/AllEmployees";
import EmployeePage from "./components/employees/EmployeePage";
import FormEmployee from "./components/employees/FormEmployee";
import FormClient from "./components/clients/FormClient";
import Page404 from "./components/Page404";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FormTask from "./components/Tasks/FormTask";
import AuthState from "./context/auth/authState";
import PrivateRoute from "./components/routes/PrivateRoute";
import ChangePass from "./components/employees/ChangePass";
import permissions from "./lib/permissions";
function App() {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/iniciar-sesion" component={Login} />
            <PrivateRoute
              justRoles={permissions.project.rolesToPost}
              exact
              path="/nuevo-proyecto"
              component={FormProject}
            />
            <PrivateRoute
              justRoles={permissions.project.rolesToUpdate}
              exact
              path="/editar-proyecto/:id"
              component={FormProject}
            />
            <PrivateRoute
              justRoles={permissions.project.rolesToGetAll}
              exact
              path="/proyectos"
              component={AllProjects}
            />
            <PrivateRoute
              justRoles={permissions.project.rolesToGetOne}
              exact
              path="/proyecto/:id"
              component={ProjectPage}
            />
            <PrivateRoute
              justRoles={permissions.task.rolesToGetOne}
              path="/tarea/:id"
              component={TaskPage}
            />

            <PrivateRoute
              justRoles={permissions.task.rolesToPost}
              path="/nueva-tarea"
              component={FormTask}
            />

            <Route path="/editar-tarea/:id">
              <FormTask edit={true} />
            </Route>
            <PrivateRoute
              justRoles={permissions.client.rolesToGetAll}
              path="/clientes"
              component={AllClients}
            />
            <PrivateRoute
              justRoles={permissions.client.rolesToGetOne}
              path="/cliente/:id"
              component={ClientPage}
            />
            <PrivateRoute
              justRoles={permissions.client.rolesToPost}
              path="/nuevo-cliente"
              component={FormClient}
            />
            <PrivateRoute
              justRoles={permissions.client.rolesToUpdate}
              path="/actualizar-cliente/:id"
              component={FormClient}
            />
            <PrivateRoute
              justRoles={permissions.employee.rolesToGetAll}
              path="/empleados"
              component={AllEmployees}
            />
            <PrivateRoute
              justRoles={permissions.employee.rolesToGetOne}
              exact
              path="/empleado/:id"
              component={EmployeePage}
            />
            <PrivateRoute
              path="/empleado/:id/cambiar-contraseña"
              component={ChangePass}
            />
            <PrivateRoute
              justRoles={permissions.employee.rolesToPost}
              path="/nuevo-empleado"
              component={FormEmployee}
            />
            <PrivateRoute
              path="/actualizar-empleado/:id"
              component={FormEmployee}
            />
            <Route path="*" component={Page404} />
          </Switch>
          <ToastContainer />
        </BrowserRouter>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
