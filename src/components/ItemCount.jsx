import {useState} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {AddShoppingCart, Add, Remove} from '@mui/icons-material/';

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

    const addCart = () => {
        onAdd(count)
    }


    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActions>
          <IconButton aria-label="add" onClick={add}>
            <Add />
          </IconButton>

            {count}

          <IconButton aria-label="remove" onClick={remove}>
            <Remove />
          </IconButton>

          <Button variant="outlined" endIcon={<AddShoppingCart />} onClick={addCart}>Agregar</Button>
        </CardActions>
      </Card>
    );
}
 
export default ItemCount;