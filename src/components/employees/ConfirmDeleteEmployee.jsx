import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {deleteEmployee} from '../../lib/services/employees';
import {toast} from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
const ConfirmDeleteEmployee = ({setOpen, idEmployee}) => {
    //componente pregunta al usuario si está seguro de eliminar el registro
    const redirectTo=useRedirecTo();
    const handleDelete=()=>{
        setOpen(false);
        deleteEmployee(idEmployee)
        .then(res=>{
            redirectTo('/empleados');
            toast.success(res.msg || 'Éxito')

        })
        .catch(error=>{
            console.log(error.response || error);
            toast.error(error.response?.data?.error || 'Error');
        })
    }
    return ( 
        <>
            <DialogTitle id="alert-dialog-title">
                Estás seguro de eliminar al empleado?
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Esta acción no se podrá deshacer, y afectará a los proyectos relacionados con él
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>setOpen(false)}>
                Cancelar
            </Button>
            <Button onClick={handleDelete} variant='contained' color="secondary" autoFocus>
                Sí, eliminar
            </Button>
            </DialogActions>
        </>
     );
}
 
export default ConfirmDeleteEmployee;