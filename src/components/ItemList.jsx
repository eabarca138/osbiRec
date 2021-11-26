import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore } from  '../service/getFirestore'
import Item from './Item'

import {Grid, Container, CircularProgress} from '@mui/material/';

const ItemList = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const db = getFirestore();
    const dbQuery = categoryId ? db.collection("items").where("category", "==", categoryId) : db.collection("items");

    dbQuery
      .get()
      .then((resp) =>
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(true));
  }, [categoryId]);
        
    return (
      <Container sx={{ mt: 3 }}>
        {loading ? (
          <Grid container spacing={2} justifyContent="center">
            {products.map((product, i) => {
              return <Item key={i} product={product} />;
            })}
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
      </Container>
    );
}

export default ItemList;


