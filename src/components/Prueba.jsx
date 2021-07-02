import React from 'react';
import { useParams } from 'react-router';
const Prueba = () => {
    const params=useParams;
    console.log( 'variables' , params.segundo);
    return ( <div>prueba</div> );
}
 
export default Prueba;