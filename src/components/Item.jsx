import ItemCount from './ItemCount'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Item = ({product}) => {

    const onAdd = (cantidad) => {
        alert(`Haz Agregado ${cantidad} de X al carrito`)
    }

    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            height="200"
            sx={{ width: 200 }}
            image={product.img}
            alt="product image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.genre}
            </Typography>

            <Typography gutterBottom variant="subtitle2" component="div">
              {product.name}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary">
              {product.price}
            </Typography>
          </CardContent>

          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        </Card>
      </Grid>
    );
}
 
export default Item;