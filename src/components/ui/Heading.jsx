import { Typography } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Heading = ({ content, component = "h1" }) => {
  const { breakpoints } = useTheme();
  const bigScreen = useMediaQuery(breakpoints.up("md"));
  const CustomHeading = withStyles((theme) => ({
    root: {
      fontSize: bigScreen ? 45 : 30,
      position: "relative",
      margin: "3rem auto 3.4rem auto",
      display: "inline-block",
      fontWeight: "bold",
      textTransform: "capitalize",
      "&::before": {
        content: '""',
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        bottom: bigScreen ? "-.5rem" : "-0.7rem",
        height: bigScreen ? "0.5rem" : "0.4rem",
        width: "75%",
        left: 2,
        borderRadius: 2,
      },
    },
  }))(Typography);
  return <CustomHeading component={component}>{content}</CustomHeading>;
};

export default Heading;
