import { useState } from 'react'
import ItemCount from './ItemCount'

import {Container, Grid, CircularProgress, Box, Divider} from "@mui/material/";

const ItemDetail = ({item, loading}) => {

  const [cantidad, setCantidad] = useState(0)
  

  const onAdd = (count) => {
    setCantidad(count)
  }
  console.log(cantidad);

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

                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
              

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
