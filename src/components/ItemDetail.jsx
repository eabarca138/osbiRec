import { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

import ItemCount from './ItemCount'

import {Container, Grid, CircularProgress, Box, Divider, Button} from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  }
});

const ItemDetail = ({item, loading}) => {
  const classes = useStyles();
  const { showCart, addItem } = useCartContext()
  const [btnFinalizar, setBtnFinalizar] = useState(false);
  
  
  const onAdd = (quantity) => {
    const cartItem = {...item, quantity}
    setBtnFinalizar(true);
    addItem(cartItem)
    showCart()
  }
  
  return (
    <Container sx={{ boxShadow: 3 }}>
      {loading ? (
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ mx: "auto", width: "50%", height: "50%", mt: 5 }}>
              <img src={item.imgDetail} alt="cover" />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>

            <Divider />

            {btnFinalizar ? (
              <Link to="/cart" className={classes.link}>
                <Button sx={{ my: 3 }} variant="outlined">finalizar compra</Button>
              </Link>
            ) : (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}

            <p>Released: {item.released}</p>
            <p>Genre: {item.genre}</p>

            <ol>
              {item.songList.map((song, i) => (
                <li key={i}>{song}</li>
              ))}
            </ol>
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </Container>
  );
};

export default ItemDetail;
