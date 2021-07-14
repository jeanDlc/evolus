import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 4,
  },
  colorPrimary: {
    backgroundColor: "rgba(255,255,255,.10)",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    backgroundImage:
      "linear-gradient(45deg ,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
    backgroundSize: "1rem 1rem",
  },
}))(LinearProgress);
const CustomProgress = ({ progress = 50 }) => {
  return (
    <>
      <BorderLinearProgress variant="determinate" value={progress} />
    </>
  );
};

export default CustomProgress;
