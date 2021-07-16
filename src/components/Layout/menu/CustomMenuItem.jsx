import {
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useAuthState from "../../../lib/hooks/useAuthState";
import { useLocation } from "react-router";
const CustomMenuItem = ({
  title = "",
  url = "/#",
  justRols = [1, 2, 3, 4],
  icon: CustomIcon,
}) => {
  const { pathname: actualURL } = useLocation();
  const { palette } = useTheme();
  const { user } = useAuthState();
  if (!justRols.includes(user?.RolId)) return null;
  return (
    <ListItem
      style={{ paddingLeft: 30 }}
      selected={actualURL === url}
      button
      component={Link}
      to={url}
    >
      {CustomIcon && (
        <ListItemIcon>
          <CustomIcon
            style={{ color: palette.primary.contrastText }}
            fontSize="small"
          />
        </ListItemIcon>
      )}
      <ListItemText secondary={title} />
    </ListItem>
  );
};

export default CustomMenuItem;
