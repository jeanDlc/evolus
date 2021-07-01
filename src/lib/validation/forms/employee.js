export const validateClient=fields=>{
    const {nombre,apellidos,num_telefonico,email,dni,ruc,direccion,pass,RolId,confirmar}=fields;
    let errors={};
    if(!nombre || nombre.trim()==='' || typeof nombre!=='string'){
        errors.nombre='Nombre no válido'
    }

    if(!apellidos || apellidos.trim()==='' || typeof apellidos!=='string'){
        errors.apellidos='Apellidos no válidos'
    }
    if(!num_telefonico || num_telefonico.trim()==='' || typeof num_telefonico!=='string' || num_telefonico.length<9){
        errors.num_telefonico='Ingresa un número de 9 dígitos'
    }
    //regular expression for email
    const regexEmail=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(!email || !regexEmail.test(email)){
        errors.email='Email no válido'
    }
    //regular expression for DNI
    const regexDNI=/([0-9][ -]*){8}/;
    if(!dni ||  !regexDNI.test(dni)){
        errors.dni='DNI no válido'
    }
    if(!pass || pass.trim()==='' || pass.length<6 || typeof pass!=='string'){
        errors.pass='Mínimo 6 caracteres'
    }
    if(!confirmar || confirmar!==pass){
        errors.confirmar='No coincide con la contraseña'
    }
    if(!RolId){
        errors.RolId='Escoge un Cargo/Rol';
    }
    return errors;
}