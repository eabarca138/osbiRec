import ItemCount from './ItemCount'

import {Container, Grid, CircularProgress, Button, Box, Divider} from "@mui/material/";
import {AddShoppingCart} from '@mui/icons-material/';

const ItemDetail = ({item, loading}) => {
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

            <Grid container sx={{ my: 3 }}>
              <Grid item xs={3}>
                <ItemCount stock={item.stock} initial={1} />
              </Grid>

              <Grid item xs={9}>
                <Button variant="outlined" endIcon={<AddShoppingCart />}>
                  add to cart
                </Button>
              </Grid>
            </Grid>

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
