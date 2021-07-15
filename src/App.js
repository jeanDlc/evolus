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
              exact
              path="/nuevo-proyecto"
              component={FormProject}
            />
            <PrivateRoute
              exact
              path="/editar-proyecto/:id"
              component={FormProject}
            />
            <PrivateRoute exact path="/proyectos" component={AllProjects} />
            <PrivateRoute exact path="/proyecto/:id" component={ProjectPage} />
            <PrivateRoute path="/tarea/:id" component={TaskPage} />

            <PrivateRoute path="/nueva-tarea" component={FormTask} />

            <Route path="/editar-tarea/:id">
              <FormTask edit={true} />
            </Route>
            <PrivateRoute path="/clientes" component={AllClients} />
            <PrivateRoute path="/cliente/:id" component={ClientPage} />
            <PrivateRoute path="/nuevo-cliente" component={FormClient} />
            <PrivateRoute
              path="/actualizar-cliente/:id"
              component={FormClient}
            />
            <PrivateRoute path="/empleados" component={AllEmployees} />
            <PrivateRoute exact path="/empleado/:id" component={EmployeePage} />
            <PrivateRoute
              path="/empleado/:id/cambiar-contraseña"
              component={ChangePass}
            />
            <PrivateRoute path="/nuevo-empleado" component={FormEmployee} />
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
