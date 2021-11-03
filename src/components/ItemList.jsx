import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { data } from '../service/data'
import Item from './Item'

import {Grid, Container, CircularProgress} from '@mui/material/';

const ItemList = () => {
  const { categoryId } = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 1000);
        });

        if (categoryId) {
          getData
          .then((result) => {
            setProducts(result.filter(prod => prod.category === categoryId ));
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(true));
        } else {
          getData
          .then((result) => {
            setProducts(result);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(true));
        }
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


