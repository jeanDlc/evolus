import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Drawer,
  useMediaQuery,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import useAuthState from "../../lib/hooks/useAuthState";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./navbar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    maxWidth: 500,
    width: 300,
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    borderRadius: 0,
  },
}));

const Navbar = () => {
  const { user } = useAuthState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  function closeMenu() {
    setOpen(false);
  }
  function openMenu() {
    setOpen(true);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!bigScreen && (
            <IconButton
              onClick={openMenu}
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            color="textPrimary"
            component="h1"
            variant="h6"
            className={classes.title}
          >
            <Link to="/">
              <img className="logo" src="/evolus.svg" alt="Evolus" />
            </Link>
          </Typography>
          {user ? (
            <Link to={`/empleado/${user?.id}`}>
              {bigScreen ? (
                `${user?.nombre} ${user?.apellidos}`
              ) : (
                <AccountCircleIcon />
              )}
            </Link>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={closeMenu}>
        <div className={classes.drawer}>
          <IconButton onClick={closeMenu} className={classes.btn}>
            <CloseIcon />
          </IconButton>
          <Sidebar />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
