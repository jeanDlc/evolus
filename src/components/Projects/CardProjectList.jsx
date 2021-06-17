import { Grid } from '@material-ui/core';
import React from 'react';
import CardProjectItem from './CardProjectItem';
const CardProjectList =     ({projectsArray}) => {
    return ( 
        <Grid container spacing={3} >
            {projectsArray.map(project=>(
                <Grid key={project.id} item md={6}  lg={4} >
                    <CardProjectItem project={project} />
                </Grid>
            ))}
            
        </Grid>
     );
}
 
export default CardProjectList;