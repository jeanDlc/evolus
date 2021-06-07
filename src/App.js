
import { useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import FormNewProject from './components/Projects/FormNewProject';
import AllProjects from './components/Projects/AllProjects';
import ProjectPage from './components/Projects/ProjectPage';
import TaskPage from './components/Tasks/TaskPage';
import AllClients from './components/clients/AllClients';
import ClientPage from './components/clients/ClientPage';
import AllEmployees from './components/employees/AllEmployees';
import EmployeePage from './components/employees/EmployeePage';
import FormNewEmployee from './components/employees/FormNewEmployee';
import FormNewClient from './components/clients/FormNewClient';
import Page404 from './components/Page404';
function App() {
  let theme = useTheme();
theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' >
                  <Home/>
                </Route>
                <Route exact path='/iniciar-sesion' >
                  <Login/>
                </Route>
                <Route exact path='/nuevo-proyecto' >
                  <FormNewProject/>
                </Route>
                <Route exact path='/proyectos' >
                  <AllProjects/>
                </Route>
                <Route exact path='/proyecto/:id' >
                  <ProjectPage/>
                </Route>
                <Route path='/tarea/:id' >
                  <TaskPage/>
                </Route>
                <Route path='/clientes' >
                  <AllClients/>
                </Route>
                <Route path='/cliente/:id' >
                  <ClientPage/>
                </Route>
                <Route path='/nuevo-cliente' >
                  <FormNewClient/>
                </Route>
                <Route path='/empleados' >
                  <AllEmployees/>
                </Route>
                <Route path='/empleado/:id' >
                  <EmployeePage/>
                </Route>
                <Route path='/nuevo-empleado' >
                  <FormNewEmployee/>
                </Route>
                <Route path='*' >
                  <Page404/>
                </Route>
            </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
