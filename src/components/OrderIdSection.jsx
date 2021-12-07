import OrderModal from './OrderModal'
import { styled } from '@mui/material/styles';

import { useState  } from 'react'
import { useForm } from "react-hook-form";
import { getFirestore } from  '../service/getFirestore'
import { Container, TextField, Button, Typography, Box } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

import { makeStyles } from '@mui/styles';

    const useStyles = makeStyles({
      searchInput: {
        [`& fieldset`]: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
        },
      },
    });

const SearchBtn = styled(Button)(({ theme }) => ({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: '30px',
  borderBottomRightRadius: '30px',
  height:'3.5rem'
}));

const OrderIdSection = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const classes = useStyles();
    
    const [orderId, setOrderId] = useState('')
    const [order, setOrder] = useState({items:[]})
    const [orderIdValidation, setOrderIdValidation] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const searchById = (data, e) => {
        const orderId = data.orderId
        setOrderId(orderId)
        const db = getFirestore();
        const dbQuery = db.collection("orders");

        dbQuery.doc(orderId)
        .get()
        .then((resp) => {
            if (resp.exists) {
                setOrder(resp.data())
                setOrderIdValidation(true)
                handleOpen()
            } else {
                setOrder({items:[]})
                setOrderIdValidation(false)
            }
        })
        .catch((e) => console.log(e))
    }
    
    return (
      <Box sx={{backgroundColor:'secondary.main'}} className="order-id-section">
      <Container className="order-id-container" sx={{display: 'flex'}}>
        <form onSubmit={handleSubmit(searchById)}>
          <h2>Seguimiento de orden:</h2>
          <TextField
          className={classes.searchInput}
            variant="outlined"
            label="Código de orden"
            name="orderId"
            {...register("orderId", {
              required: {
                value: true,
                message: "Ingresa el código de tu orden",
              },
            })}
          />
          <SearchBtn type="submit" color="primary" variant="contained">
            <SearchIcon />
          </SearchBtn>
          {!orderIdValidation ? (
            <Typography variant="caption" color="error" component="div" align='center'>
              El Id ingresado no existe
            </Typography>
          ) : (
            <Typography variant="caption" color="error" component="div" align='center'>
            {errors.orderId && errors.orderId.message}
          </Typography>
          )}
        </form>

        <OrderModal
          order={order}
          orderId={orderId}
          open={open}
          handleClose={handleClose}
        />
      </Container>
      </Box>
    );
}

export default OrderIdSection
