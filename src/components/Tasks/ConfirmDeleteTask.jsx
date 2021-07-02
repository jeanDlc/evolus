import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteTask } from '../../lib/services/task';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
import { toast } from 'react-toastify';
const ConfirmDeleteTask = ({setOpen, task}) => {
    const redirecTo=useRedirecTo();
    const handleDelete=()=>{
        deleteTask(task.id)
        .then(res=>{
            toast.success(res.msg || 'Éxito');
        }).catch(error=>{
            toast.error(error.response?.data?.error || 'Ocurrió un error');
        }).then(()=>{
            redirecTo(`/proyecto/${task.ProyectoId}`);
        })
        setOpen(false)
    }
    return ( 
        <>
        <DialogTitle id="alert-dialog-title">Eliminar Tarea</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Seguro? Esta acción no se podrá deshacer
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>
            No, cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary" variant='contained' autoFocus>
            Sí, eliminar
          </Button>
        </DialogActions>
        </>
     );
}
 
export default ConfirmDeleteTask;