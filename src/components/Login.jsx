import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  FormHelperText,
  LinearProgress,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import useAuthState from "../lib/hooks/useAuthState";
import useForm from "../lib/hooks/useForm";
import validateLogInForm from "../lib/validation/forms/logIn";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory();
  //función que inicia sesión del usuario
  const { logIn, authenticated } = useAuthState();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  //campos del formulario
  const INITIAL_STATE = {
    email: "",
    pass: "",
  };
  useEffect(() => {
    //si el ususario está autenticado, redirigir a Home
    if (authenticated) history.push("/");
  }, [authenticated]);
  const handleLogIn = async () => {
    setLoadingSubmit(true);
    await logIn(fields);
    setLoadingSubmit(false);
  };
  //encarga de la validación y el llamado a logIn
  const { handleSubmit, handleChange, errors, fields } = useForm(
    INITIAL_STATE,
    validateLogInForm,
    handleLogIn
  );
  //formulario para iniciar sesión
  return (
    <Container maxWidth="sm" component="main" style={{ marginTop: 80 }}>
      <Card>
        <CardContent component="form" onSubmit={handleSubmit}>
          <Typography
            style={{ fontWeight: "bold" }}
            align="center"
            component="h1"
            variant="h4"
            gutterBottom
          >
            Inicia sesión
          </Typography>
          <Typography align="center" gutterBottom>
            Llena el formulario
          </Typography>
          <FormControl
            error={errors.email ? true : false}
            color="secondary"
            margin="normal"
            fullWidth={true}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              startAdornment={
                <InputAdornment>
                  <PersonIcon />
                </InputAdornment>
              }
              value={fields.email}
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <FormHelperText>{errors.email} </FormHelperText>
          </FormControl>
          <FormControl
            error={errors.pass ? true : false}
            color="secondary"
            margin="normal"
            fullWidth={true}
          >
            <InputLabel htmlFor="pass">Password</InputLabel>
            <Input
              startAdornment={
                <InputAdornment>
                  <LockIcon />
                </InputAdornment>
              }
              value={fields.pass}
              id="pass"
              name="pass"
              type="password"
              aria-describedby="helper-pass"
              onChange={handleChange}
            />
            <FormHelperText>{errors.pass} </FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            fullWidth={true}
            color="primary"
            type="submit"
            style={{ marginTop: 18 }}
            disabled={loadingSubmit}
          >
            Iniciar sesión
          </Button>
          {loadingSubmit && <LinearProgress className="mt-4" />}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
