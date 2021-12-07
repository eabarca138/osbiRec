import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getFirestore } from  '../service/getFirestore'
import Item from './Item'
import OrderIdSection from './OrderIdSection'
import Carousel1 from './Carousel1'


import {Grid, Container, CircularProgress } from '@mui/material/';


//import {data} from '../service/data'

const ItemList = () => {
  const { categoryId } = useParams();
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


/* Carga productos
  useEffect(() => {
    data.forEach(async (prod) => {
      try {
        let db = getFirestore();
        await db.collection("items").add(prod);
      } catch (error) {
        console.log(error);
      }
    });
  }, []); */

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = categoryId ? db.collection("items").where("category", "==", categoryId) : db.collection("items");

    dbQuery
      .get()
      .then((resp) => {
        if (resp.docs.length) {
          setProducts(
            resp.docs.map((item) => ({ id: item.id, ...item.data() }))
          );
        } else {
          history.push(`/NotFound`);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(true);
      });
  }, [categoryId, history]);
        
    return (
      <>
{      categoryId ? <br /> : <Carousel1 /> }
      <Container sx={{ mt: 3, mb:5 }}>
        {loading ? (
          <Grid container spacing={2} justifyContent="center">
            {products.map((product, i) => {
              return (
                  <Item key={i} product={product} />
              );
            })}
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
      </Container>
      
      {categoryId ? <br /> : <OrderIdSection />}
      </>
    );
}

export default ItemList;


