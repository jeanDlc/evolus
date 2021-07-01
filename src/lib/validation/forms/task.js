export const newTaskValidation=(fields)=>{
    const errores={};
    const {nombre, descripcion, fecha_fin}=fields;
    if(!nombre || nombre.trim==='' || typeof nombre!=='string'){
        errores.nombre='El nombre no es válido'
    }
    if(!descripcion || descripcion.trim==='' || typeof descripcion!=='string'){
        errores.descripcion='La descripción no es válida'
    }
    if(!fecha_fin ){
        errores.fecha_fin='Fecha no válida'
    }
    return errores;
}