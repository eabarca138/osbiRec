import {useState} from 'react';

import {IconButton, Grid, Button} from '@mui/material/';
import { Add, Remove, AddShoppingCart} from '@mui/icons-material/';

const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);

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
    setCount(initial);
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
          <Button
            variant="outlined"
            endIcon={<AddShoppingCart />}
            onClick={handlerOnAdd}
          >
            agregar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
 
export default ItemCount;