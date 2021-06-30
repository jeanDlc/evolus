
import { useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import FormProject from './components/Projects/FormProject';
import AllProjects from './components/Projects/AllProjects';
import ProjectPage from './components/Projects/ProjectPage';
import TaskPage from './components/Tasks/TaskPage';
import AllClients from './components/clients/AllClients';
import ClientPage from './components/clients/ClientPage';
import AllEmployees from './components/employees/AllEmployees';
import EmployeePage from './components/employees/EmployeePage';
import FormEmployee from './components/employees/FormEmployee';
import FormClient from './components/clients/FormClient';
import Page404 from './components/Page404';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
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
                  <FormProject/>
                </Route>
                <Route exact path='/editar-proyecto:id' >
                  <FormProject/>
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
                  <FormClient/>
                </Route>
                <Route path='/actualizar-cliente/:id' >
                  <FormClient/>
                </Route>
                <Route path='/empleados' >
                  <AllEmployees/>
                </Route>
                <Route path='/empleado/:id' >
                  <EmployeePage/>
                </Route>
                <Route path='/nuevo-empleado' >
                  <FormEmployee/>
                </Route>
                <Route path='/actualizar-empleado/:id' >
                  <FormEmployee/>
                </Route>
                <Route path='*' >
                  <Page404/>
                </Route>
            </Switch>
        </Layout>
        <ToastContainer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
