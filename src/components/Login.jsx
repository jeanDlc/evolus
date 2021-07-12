import { Button, Card, CardContent, Container, FormControl, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

const Login = () => {
    const login=e=>{
        e.preventDefault();
        console.log('login');
    }
    return ( 
            <Container  maxWidth='sm' component='main' style={{marginTop:80}}  >
            <Card>
                <CardContent component='form' onSubmit={login} >
                    <Typography style={{fontWeight:'bold'}} align='center' component='h1' variant='h4' gutterBottom >Inicia sesión</Typography>
                    <Typography align='center'  gutterBottom>Llena el formulario</Typography>
                    <FormControl color='secondary'  margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input 
                            startAdornment={
                                <InputAdornment>
                                    <PersonIcon/>
                                </InputAdornment>
                            }
                            id="email" name='email' type='email' />
                    </FormControl>
                    <FormControl color='secondary'  margin='normal' fullWidth={true} >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input startAdornment={
                            <InputAdornment>
                                <LockIcon/>
                            </InputAdornment>
                        } id="password" name='password' type='password'
                            aria-describedby="helper-password"
                        />
                    </FormControl>
                    <Button variant='contained'
                        fullWidth={true}
                        color='primary' 
                        type='submit'
                        style={{marginTop:18}}
                    >Iniciar sesión</Button>
                </CardContent>
            </Card>
        </Container>
     );
}
 
export default Login;