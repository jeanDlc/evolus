import { red, indigo, green, yellow, blue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const bgColor = "rgb(34, 43, 54)";
const indigoGhost = "rgba(83,109,254,.05)";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: bgColor,
      contrastText: "rgb(145, 158, 171)",
    },
    secondary: {
      main: indigo.A200,
      contrastText: "#ffffff",
    },
    error: {
      main: red.A200,
    },
    background: {
      default: "rgb(23, 28, 36)",
    },
    success: {
      main: green.A400,
    },
    warning: {
      main: yellow[800],
    },
    info: {
      main: blue.A400,
    },
    type: "dark",
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: bgColor,
      },
    },
    MuiCardActionArea: {
      root: {
        "&:hover": {
          backgroundColor: indigoGhost,
        },
      },
    },
    MuiMenu: {
      list: {
        backgroundColor: bgColor,
      },
    },
    MuiListItem: {
      root: {},
      button: {
        borderRadius: 10,
        "&:hover": {
          backgroundColor: indigoGhost,
        },
        "&.Mui-selected": {
          backgroundColor: indigoGhost,
        },
      },
      selected: {
        backgroundColor: indigoGhost,
      },
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: indigo.A200,
        "&:hover": {
          backgroundColor: indigo[700],
        },
        color: "white",
      },
      containedSecondary: {
        backgroundColor: red.A200,
        "&:hover": {
          backgroundColor: red[700],
        },
      },
      contained: {
        backgroundColor: green[600],
        color: "white",
        "&:hover": {
          backgroundColor: green[700],
        },
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: bgColor,
      },
    },
  },
});

export default theme;
