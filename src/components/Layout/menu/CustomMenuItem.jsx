import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import useAuthState from "../../../lib/hooks/useAuthState";
const CustomMenuItem = ({
  title = "",
  url = "/#",
  justRols = [1,2,3,4],
  icon: CustomIcon,
}) => {
  const { user } = useAuthState();
  if(!justRols.includes(user?.RolId)) return null;
  return (
    <ListItem style={{ paddingLeft: 30 }} button component={Link} to={url}>
      {CustomIcon && (
        <ListItemIcon>
          <CustomIcon />
        </ListItemIcon>
      )}
      <ListItemText secondary={title} />
    </ListItem>
  );
};

export default CustomMenuItem;
