import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import useAuthState from "../../lib/hooks/useAuthState";
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
  const { getAuthUser, user } = useAuthState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  useEffect(() => {
    if (!user) getAuthUser();
  }, []);
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
            <Link to="/">Evolus</Link>
          </Typography>

          <Link to={`/empleado/${user?.id}`}>
            {`${user?.nombre} ${user?.apellidos}`}
          </Link>
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
