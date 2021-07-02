import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {  withStyles } from '@material-ui/core/styles';
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 15,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
    },
  }))(LinearProgress);
const ProjectProgress = ({progress=50}) => {
    return ( 
        <>
            <BorderLinearProgress variant="determinate" value={progress} />
        </>
     );
}
 
export default ProjectProgress;