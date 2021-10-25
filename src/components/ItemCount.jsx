import {useState} from 'react';

import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Add, Remove, AddShoppingCart} from '@mui/icons-material/';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

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


    return (
      <CardActions>
        <IconButton aria-label="add" onClick={add}>
          <Add />
        </IconButton>

        {count}

        <IconButton aria-label="remove" onClick={remove}>
          <Remove />
        </IconButton>

        <Button
          variant="outlined"
          endIcon={<AddShoppingCart />}
          onClick={onAdd}
        ></Button>
      </CardActions>
    );
}
 
export default ItemCount;