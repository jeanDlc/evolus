import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useAuthState from "../../../lib/hooks/useAuthState";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useState } from "react";
const Menu = ({ title, children, icon: Icon, justRols = [1, 2, 3, 4] }) => {
  const { user } = useAuthState();
  const [open, setOpen] = useState(true);
  const toogleMenu = () => {
    setOpen(!open);
  };
  if (!justRols.includes(user?.RolId)) return null;
  return (
    <>
      <ListItem button onClick={toogleMenu}>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List>{children}</List>
      </Collapse>
    </>
  );
};

export default Menu;
