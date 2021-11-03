import {useState} from 'react';
import { Link } from "react-router-dom";

import {IconButton, Grid, Button} from '@mui/material/';
import { Add, Remove, AddShoppingCart} from '@mui/icons-material/';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  }
});

const ItemCount = ({ stock, initial, onAdd }) => {
  const classes = useStyles();

  const [count, setCount] = useState(initial);
  const [boton, setBoton] = useState(false);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlerOnAdd = () => {
    onAdd(count);
    alert(
      `${count} ${
        count > 1 ? "productos añadidos" : "producto añadido"
      } al carrito`
    );
    setCount(initial);
    setBoton(true);
  };

  return (
    <div>
      <Grid container sx={{ my: 3 }}>
        <Grid item xs={4}>
          <IconButton aria-label="add" onClick={add}>
            <Add />
          </IconButton>

          {count}

          <IconButton aria-label="remove" onClick={remove}>
            <Remove />
          </IconButton>
        </Grid>

        <Grid item xs={8}>
          {boton ? (
            <Link to="/cart" className={classes.link}>
              <Button variant="outlined">finalizar compra</Button>
            </Link>
          ) : (
            <Button
              variant="outlined"
              endIcon={<AddShoppingCart />}
              onClick={handlerOnAdd}
            >
              agregar
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
 
export default ItemCount;