import { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

import ItemCount from './ItemCount'

import {Container, Grid, CircularProgress, Box, Divider, Button } from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const ItemDetail = ({item, loading, handleChange}) => {
  const classes = useStyles();
  const { addItem, clpFormatter } = useCartContext()
  const [btnFinalizar, setBtnFinalizar] = useState(false);
  
  const onAdd = (quantity) => {
    setBtnFinalizar(true);
    addItem(item, quantity);
    handleChange(quantity)
    
  };

  return (
    <Container sx={{ boxShadow: 3 }}>
      {loading ? (
        <Grid container>
          <Grid item xs={6}>
            <Box
              component="img"
              display="flex"
              justifyContent="center"
              sx={{
                margin: 'auto',
                marginTop: 2,
                height: 350,
                width: 350,
                maxHeight: { xs: 100, md: 200 },
                maxWidth: { xs: 100, md: 200 },
              }}
              alt="cover"
              src={item.img}
            />
          </Grid>

          <Grid item xs={6}>
            <h1>{item.name}</h1>
            <h2>{clpFormatter(item.price)}</h2>

            <Divider />

            {item.stock ? (
              <>
            {btnFinalizar ? (
              <Link to="/cart" className={classes.link}>
                <Button sx={{ my: 3 }} variant="outlined">
                  finalizar compra
                </Button>
              </Link>
            ) : (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}
            </>
) : (
  <p>producto sin stock</p>
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
