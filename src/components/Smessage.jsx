import { useParams } from 'react-router-dom'
import { Container,Typography, Box,Button } from '@mui/material/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHistory } from "react-router-dom";


const Smessage = () => {
    const { orderId } = useParams();
    const history = useHistory();

    const homePage = () => {
        history.push('/')
    }
    return (
        <Box mt={5} sx={{width: '90%', marginRight:'auto', marginLeft:'auto'}}>
        <Container color="success" sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", padding: 5 }}>
            <Typography variant="h4" align="center" sx={{color:'green'}}>Compra finalizada <CheckCircleIcon color="success" /></Typography>
            <Typography variant="h5" align="center">Código de la orden : {orderId}</Typography>
            <Button variant="outlined" onClick={homePage}>
              Volver al catálogo
            </Button>
        </Container>
        </Box>
    )
}

export default Smessage
