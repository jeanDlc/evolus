import React from 'react';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Navbar from './Navbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
  
const Layout = ({children}) => {
    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));
    
    return ( 
        <>
            <Navbar/>
            <Grid style={{maxWidth:'100%'}} container spacing={3} >
                {bigScreen && (
                    <Grid item md={4} lg={3} xl={2} >
                        <Sidebar/>
                    </Grid>
                )}
                <Grid item xs={12} md={8} lg={9} xl={10} >
                    {children}
                </Grid>
            </Grid>
            <Footer/>
        </>
     );
}
 
export default Layout;