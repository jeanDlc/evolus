import React from 'react';
import {useParams} from 'react-router-dom';
const TaskPage = () => {
    const params=useParams();
    console.log(params);
    return ( <div>Task {params.id} </div> );
}
 
export default TaskPage;