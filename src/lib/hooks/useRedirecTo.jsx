import React from 'react';
import {useHistory} from 'react-router-dom';
const useRedirecTo = () => {

    const history=useHistory();
    const redirectTo= (url)=>{
        history.push(url);
    }
    return redirectTo;
}
 
export default useRedirecTo;