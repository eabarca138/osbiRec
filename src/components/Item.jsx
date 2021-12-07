import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import {Card, CardContent, CardMedia, CardActions, Button, Typography, Grid, Grow } from '@mui/material/';
import { makeStyles } from '@mui/styles';

    const useStyles = makeStyles({
      scale: {
        cursor: "pointer",
        '&:hover':{
          transform: "scale(1.1)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        }
      },
      link: {
        textDecoration: "none",
      },
    });

const Item = ({ product }) => {
    const classes = useStyles();
    const { clpFormatter } = useCartContext()
    const checked = true;

    return (
      <Grow in={checked}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to={`/detail/${product.id}`} className={classes.link}>
        <Card  className={classes.scale} sx={{height: '100%'}}>
          <CardMedia
            component="img"
            height="200"
            image={product.img}
            alt="product image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.category}
            </Typography>

            <Typography gutterBottom variant="subtitle2" component="div">
              {product.name}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary">
              {clpFormatter(product.price)}
            </Typography>
            <CardActions>
        <Button sx={{width:'100%'}} variant='outlined' size="small">Ver Detalle</Button>
      </CardActions>
          </CardContent>

        </Card>
      </Link>
      </Grid>
      </Grow>
    );
}
 
export default Item;