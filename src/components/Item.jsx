import {Card, CardContent, CardMedia, Typography, Grid} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom"

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

    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to={`/detail/${product.id}`} className={classes.link}>
        <Card sx={{ maxWidth: 200 }} className={classes.scale}>
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

        </Card>
      </Link>
      </Grid>
    );
}
 
export default Item;