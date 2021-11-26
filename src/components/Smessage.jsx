import { useParams } from 'react-router-dom'
import { Container,Typography, Box } from '@mui/material/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Smessage = () => {
    const { orderId } = useParams();
    return (
        <Box mt={5}>
        <Container color="success" sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", padding: 5 }}>
            <Typography variant="h4" align="center" sx={{color:'green'}}>Compra finalizada <CheckCircleIcon color="success" /></Typography>
            <Typography variant="h5" align="center">Id del pedido : {orderId}</Typography>
        </Container>
        </Box>
    )
}

export default Smessage
