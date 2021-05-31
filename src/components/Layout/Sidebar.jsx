import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GradeIcon from '@material-ui/icons/Grade';
import ListIcon from '@material-ui/icons/List';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor:theme.palette.secondary.main,
      minHeight:'100vh',
      color: 'rgb(145, 158, 171)'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
const Sidebar = () => {
    const classes = useStyles();
    const [openProjects, setOpenProjects] = useState(true);
    const [openClients, setOpenClients] = useState(true);
    const [openEmployees, setOpenEmployees] = useState(true);
    
    return ( 
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Hola Jean Pierre
          </ListSubheader>
        }
        className={classes.root}
      >
        {/**Lista de proyectos *************************************************/}
        <ListItem button onClick={()=>setOpenProjects(!openProjects)} >
            <ListItemIcon>
                <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
            {openProjects ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProjects} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Agregar nuevo" />
            </ListItem>
          </List>
          
        </Collapse>

        {/**Lista de empleados *************************************************/}
        <ListItem button onClick={()=>setOpenEmployees(!openEmployees)}>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Empleados" />
            {openEmployees ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEmployees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todos" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Agregar nuevo" />
                </ListItem>
            </List>
        </Collapse>


        {/**Lista de clientes *************************************************/}
        <ListItem button onClick={()=>setOpenClients(!openClients)}>
            <ListItemIcon>
                <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
            {openClients ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openClients} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todos" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Agregar nuevo" />
                </ListItem>
            </List>
        </Collapse>
        
      </List>
     );
}
 
export default Sidebar;