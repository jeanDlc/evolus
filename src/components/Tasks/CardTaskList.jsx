import { Grid } from '@material-ui/core';
import React from 'react';
import CardTaskItem from './CardTaskItem';
const CardTaskList = ({tasksArray}) => {
    
    return ( 
        <>
            <Grid container spacing={3} >
                {tasksArray.map(task=>(
                    <Grid item key={task.id} xs={12} md={6} lg={4}>
                        <CardTaskItem task={task} />
                    </Grid>
                ))}
            </Grid>
        </>
     );
}
 
export default CardTaskList;