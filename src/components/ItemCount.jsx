import {useState} from 'react';

import {IconButton} from '@mui/material/';
import { Add, Remove} from '@mui/icons-material/';

const ItemCount = ({stock, initial}) => {

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
      <div>
        <IconButton aria-label="add" onClick={add}>
          <Add />
        </IconButton>

        {count}

        <IconButton aria-label="remove" onClick={remove}>
          <Remove />
        </IconButton>
      </div>
    );
}
 
export default ItemCount;