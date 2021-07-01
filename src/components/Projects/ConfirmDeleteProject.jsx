import React from 'react';
import {Button,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core'
import { deleteProject } from '../../lib/services/project';
import { toast } from 'react-toastify';
import useRedirecTo from '../../lib/hooks/useRedirecTo';
const ConfirmDeleteProject = ({setOpen, idProject}) => {
    const redirecTo=useRedirecTo();
    const handleDelete=()=>{
        deleteProject(idProject)
        .then(res=>{
            toast.success(res.msg || 'Éxito');
        })
        .catch(error=>{
            toast.error(error.response?.data?.error || 'Ocurrió un error');
        })
        setOpen(false);
        redirecTo('/proyectos');
    }
    return ( 
        <>
        <DialogTitle id="alert-dialog-title" >Eliminar proyecto?</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Esta acción no podrá deshacerse. Probablemente necesites esta información para hacer un reporte en un fututo.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)} >
                Cancelar
            </Button>
            <Button onClick={handleDelete} color="secondary" variant='contained' autoFocus>
                Sí, Eliminar
            </Button>
        </DialogActions>
        </>
     );
}
 
export default ConfirmDeleteProject;