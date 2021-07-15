import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Layout from "../Layout/Layout";
import useForm from "../../lib/hooks/useForm";
import validatePassFields from "../../lib/validation/forms/changePass";
const ChangePass = () => {
  const INITIAL_STATE = {
    pass: "",
    newPass: "",
    confirmNewPass: "",
  };
  const postNewPassword = () => {
    //TODO: consultar a la api para cambiar el password
    console.log(fields);
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
            >
              Guardar cambios
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default ChangePass;
