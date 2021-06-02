
import { useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';
import NewProject from './components/Projects/NewProject';
import AllProjects from './components/Projects/AllProjects';
import ProjectPage from './components/Projects/ProjectPage';
import TaskPage from './components/Tasks/TaskPage';
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
                <Route exact path='/registrarse' >
                  <SignIn/>
                </Route>
                <Route exact path='/nuevo-proyecto' >
                  <NewProject/>
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
            </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
