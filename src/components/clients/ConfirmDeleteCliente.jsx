import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {deleteClient} from '../../lib/services/client';
import {toast} from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
const ConfirmDeleteClient = ({setOpen, idClient}) => {
    const redirectTo=useRedirecTo();
    const handleDelete=()=>{
        deleteClient(idClient)
        .then(res=>{
            redirectTo('/clientes');
            toast.success(res.data?.msg || 'Éxito');
        }).catch(error=>{
            toast.error(error.response?.data?.error || 'Ocurrió un error');
        })
        setOpen(false)
    }
    return ( 
        <>
            <DialogTitle id="alert-dialog-title">
                Estás seguro de eliminar al cliente?
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Esta acción no se podrá deshacer, y afectará a los proyectos pendientes con este cliente (si es que los hubiera)
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
 
export default ConfirmDeleteClient;