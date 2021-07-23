import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  LinearProgress,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Layout from "../Layout/Layout";
import useForm from "../../lib/hooks/useForm";
import validatePassFields from "../../lib/validation/forms/changePass";
import { changePassword } from "../../lib/services/employees";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const ChangePass = () => {
  const [loadingSumit, setLoadingSubmit] = useState(false);
  const params = useParams();
  const { push } = useHistory();
  const employeeId = params.id;
  const INITIAL_STATE = {
    pass: "",
    newPass: "",
    confirmNewPass: "",
  };
  const postNewPassword = () => {
    //consultar a la api para cambiar el password
    setLoadingSubmit(true);
    changePassword(employeeId, fields)
      .then((res) => {
        toast.success(res.msg || "Éxito");
        push(`/empleado/${employeeId}`);
      })
      .catch((error) => {
        console.log(error.response || error);
        toast.error(error.response?.data?.error || "Ocurrió un error");
      })
      .then(() => setLoadingSubmit(false));
  };
  const { handleSubmit, handleChange, fields, errors } = useForm(
    INITIAL_STATE,
    validatePassFields,
    postNewPassword
  );

  return (
    <Layout>
      <Container maxWidth="sm" style={{ marginTop: 50 }}>
        <Card>
          <CardContent component="form" onSubmit={handleSubmit}>
            <Typography component="h2" variant="h4" gutterBottom>
              Cambiar contraseña
            </Typography>
            <TextField
              error={errors.pass ? true : false}
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              label="Contraseña actual"
              placeholder="Contraseña actual"
              name="pass"
              type="password"
              helperText={errors.pass}
              value={fields.pass}
              onChange={handleChange}
            />
            <TextField
              error={errors.newPass ? true : false}
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              label="Nueva contraseña"
              placeholder="Nueva contraseña"
              name="newPass"
              type="password"
              helperText={errors.newPass}
              value={fields.newPass}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              label="Confirma la nueva contraseña"
              placeholder="Repite la nueva contraseña"
              name="confirmNewPass"
              type="password"
              helperText={errors.confirmNewPass}
              value={fields.confirmNewPass}
              onChange={handleChange}
              error={fields.newPass !== fields.confirmNewPass}
            />
            <Button
              startIcon={<SaveIcon />}
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 15 }}
              size="large"
              type="submit"
              disabled={loadingSumit}
            >
              Guardar cambios
            </Button>

            {loadingSumit && <LinearProgress className="mt-4" />}
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default ChangePass;
