import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const Page404 = () => {
    return ( 
        <Container component='main' >
            <Typography component='h1' variant='h2'  align='center'
                style={{fontWeight:'bold', marginTop:40}}
                gutterBottom
            >
                Error 404
            </Typography>
            <Typography variant='h4'  align='center' >No encontramos la página que buscas</Typography>
            <Box textAlign='center' marginY={10}  >
                <img src='https://material-kit-pro-react.devias.io/static/error/error404_dark.svg' 
                    style={{maxWidth:'100%'}}
                    alt="404"
                />
            </Box>
            <Box textAlign='center' >
                <Button variant='contained' color='primary'>
                    <Link to='/' >Volver a casa</Link>
                </Button>
            </Box>
            
        </Container>
     );
}
 
export default Page404;