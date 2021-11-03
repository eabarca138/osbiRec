import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import {data} from '../service/data'

import {CircularProgress, Container, Grid} from '@mui/material/';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });

    getItem
      .then((result) => {
        setItem(result.filter((item) => item.id === id)[0]);
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(true));
}, [id]);

  return (
    <Container sx={{ mt: 3 }}>
      {loading ? (
        <ItemDetail item={item} loading={loading} />
      ) : (
          <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
        </Grid>
      )}
    </Container>
  );
};
 
export default ItemDetailContainer;