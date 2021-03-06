import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../lib/services/employees";
import { toast } from "react-toastify";
import useRedirecTo from "../../lib/hooks/useRedirecTo";
import { newEmployee, updateEmployee } from "../../lib/services/employees";
import useRoles from "../../lib/hooks/useRoles";
import EditIcon from "@material-ui/icons/Edit";
import useForm from "../../lib/hooks/useForm";
import { validateEmployee } from "../../lib/validation/forms/employee";
import Layout from "../Layout/Layout";
const FormEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [edition, setEdition] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const roles = useRoles();
  const redirectTo = useRedirecTo();
  const params = useParams();
  const initialState = {
    nombre: "",
    apellidos: "",
    num_telefonico: "",
    email: "",
    dni: "",
    ruc: "",
    direccion: "",
    pass: "",
    RolId: 0,
    confirmar: "",
  };
  const handleEmployee = async () => {
    setLoadingSubmit(true);
    try {
      let res;
      if (params.id) {
        //update
        res = await updateEmployee(params.id, employee);
        redirectTo(`/empleado/${params.id}`);
      } else {
        //create new employee
        res = await newEmployee(employee);
        redirectTo("/empleados");
      }
      toast.success(res.msg || "Éxito");
    } catch (error) {
      if (error.response?.data?.errores) {
        const arrayErrors = error.response.data.errores;
        arrayErrors.forEach((err) => toast.error(err.msg));
      } else {
        toast.error(error.response?.data?.error || "Ocurrió un error");
      }
    }
    setLoadingSubmit(false);
  };
  const {
    errors,
    fields: employee = {},
    setFields: setEmployee,
    handleSubmit,
    handleChange,
  } = useForm(initialState, validateEmployee, handleEmployee);
  useEffect(() => {
    let isMounted = true;
    if (params.id) {
      if (isMounted) {
        setLoading(true);
        setEdition(true);
      }
      getEmployeeById(params.id)
        .then((res) => {
          if (isMounted) {
            setEmployee({
              ...employee,
              ...res,
              confirmar: res.pass,
            });
          }
        })
        .catch((error) => {
          redirectTo("/empleados");
          toast.error(error.response?.data?.error || "Error");
          console.log(error.response || error);
        })
        .then(() => isMounted && setLoading(false));
    } else {
      if (isMounted) {
        setEmployee(initialState);
        setEdition(false);
      }
    }
    return () => (isMounted = false);
  }, [params.id]);

  return (
    <Layout>
      <Container maxWidth="md" style={{ marginTop: 50 }}>
        <Card>
          <CardContent component="form" onSubmit={handleSubmit}>
            <Typography
              style={{ fontWeight: "bold" }}
              component="h1"
              variant="h4"
              gutterBottom
            >
              {edition ? "Editar Empleado " : "Nuevo Empleado"}
            </Typography>
            <Typography gutterBottom>
              {edition
                ? "Modifica los campos que requieras"
                : "Llena el formulario para crear un nuevo empleado"}
            </Typography>
            {loading && edition ? (
              <div>
                <p>Espere..</p>
                <CircularProgress color="secondary" />
              </div>
            ) : (
              <>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.nombre ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="nombre">
                        Nombre del empleado
                      </InputLabel>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        onChange={handleChange}
                        value={employee.nombre}
                      />
                      {errors.nombre && (
                        <FormHelperText>{errors.nombre} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.apellidos ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="apellidos">
                        Apellidos del empleado
                      </InputLabel>
                      <Input
                        id="apellidos"
                        name="apellidos"
                        type="text"
                        onChange={handleChange}
                        value={employee.apellidos}
                      />
                      {errors.apellidos && (
                        <FormHelperText>{errors.apellidos} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.num_telefonico ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="num_telefonico">
                        Número telefónico
                      </InputLabel>
                      <Input
                        startAdornment={
                          <InputAdornment>
                            <PhoneIcon />
                          </InputAdornment>
                        }
                        id="num_telefonico"
                        name="num_telefonico"
                        type="text"
                        value={employee.num_telefonico}
                        onChange={handleChange}
                      />
                      {errors.num_telefonico && (
                        <FormHelperText>
                          {errors.num_telefonico}{" "}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  {!edition && (
                    <Grid item xs={12} md={6}>
                      <FormControl
                        color="secondary"
                        error={errors.email ? true : false}
                        margin="normal"
                        fullWidth={true}
                      >
                        <InputLabel htmlFor="email">
                          Correó electrónico (email)
                        </InputLabel>
                        <Input
                          startAdornment={
                            <InputAdornment>
                              <EmailIcon />
                            </InputAdornment>
                          }
                          id="email"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          value={employee.email}
                        />
                        {errors.email && (
                          <FormHelperText>{errors.email} </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  )}
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.dni ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="dni">DNI</InputLabel>
                      <Input
                        id="dni"
                        name="dni"
                        type="text"
                        onChange={handleChange}
                        value={employee.dni}
                      />
                      {errors.dni && (
                        <FormHelperText>{errors.dni} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.ruc ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="ruc">RUC</InputLabel>
                      <Input
                        id="ruc"
                        name="ruc"
                        type="text"
                        onChange={handleChange}
                        value={employee.ruc}
                      />
                      {errors.ruc && (
                        <FormHelperText>{errors.ruc} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.direccion ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel htmlFor="direccion">
                        Dirección del empleado
                      </InputLabel>
                      <Input
                        startAdornment={
                          <InputAdornment>
                            <HomeIcon />
                          </InputAdornment>
                        }
                        id="direccion"
                        name="direccion"
                        type="text"
                        onChange={handleChange}
                        value={employee.direccion}
                      />
                      {errors.direccion && (
                        <FormHelperText>{errors.direccion} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      color="secondary"
                      error={errors.RolId ? true : false}
                      margin="normal"
                      fullWidth={true}
                    >
                      <InputLabel id="label-rol" htmlFor="rol">
                        Cargo/Rol
                      </InputLabel>
                      <Select
                        labelId="label-rol"
                        id="rol"
                        value={employee.RolId}
                        onChange={handleChange}
                        name="RolId"
                      >
                        <MenuItem value={0} disabled={true}>
                          --Selecciona una opción--
                        </MenuItem>
                        {roles.map((rol) => (
                          <MenuItem key={rol.id} value={rol.id}>
                            {rol.nombre}{" "}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.RolId && (
                        <FormHelperText>{errors.RolId} </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  {!edition && (
                    <>
                      <Grid item xs={12} md={6}>
                        <FormControl
                          color="secondary"
                          error={errors.pass ? true : false}
                          margin="normal"
                          fullWidth={true}
                        >
                          <InputLabel htmlFor="pass">Contraseña</InputLabel>
                          <Input
                            startAdornment={
                              <InputAdornment>
                                <LockIcon />
                              </InputAdornment>
                            }
                            id="pass"
                            name="pass"
                            type="password"
                            aria-describedby="helper-pass"
                            onChange={handleChange}
                            value={employee.pass}
                          />
                          {errors.pass && (
                            <FormHelperText>{errors.pass} </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl
                          color="secondary"
                          error={
                            employee.pass !== employee.confirmar ? true : false
                          }
                          margin="normal"
                          fullWidth={true}
                        >
                          <InputLabel htmlFor="confirmar">
                            Confirma la contraseña
                          </InputLabel>
                          <Input
                            startAdornment={
                              <InputAdornment>
                                <LockIcon />
                              </InputAdornment>
                            }
                            id="confirmar"
                            name="confirmar"
                            type="password"
                            aria-describedby="helper-confirmar"
                            onChange={handleChange}
                            value={employee.confirmar}
                          />
                          {errors.confirmar && (
                            <FormHelperText>{errors.confirmar} </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} md={6}>
                    <Button
                      startIcon={edition ? <EditIcon /> : <AddCircleIcon />}
                      variant="contained"
                      fullWidth={true}
                      color="primary"
                      type="submit"
                      disabled={loadingSubmit}
                    >
                      {edition ? "Guardar cambios" : "Guardar"}
                    </Button>
                    {loadingSubmit && <LinearProgress className="mt-4" />}
                  </Grid>
                </Grid>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default FormEmployee;
