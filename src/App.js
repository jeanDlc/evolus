
import Typography from '@material-ui/core/Typography';
import { useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Layout from './components/Layout/Layout';

function App() {
  let theme = useTheme();
theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme} >
      <Layout>
        <Typography>Primera vista</Typography>
        <Button color='primary' variant='contained' >Botón</Button>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
