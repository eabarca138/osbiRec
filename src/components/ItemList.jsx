import { useState, useEffect } from 'react'

import Item from './Item'

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

const ItemList = () => {

    const data = [
      { id: "01", name: "Earth A.d. - The Misfits", genre: "hardcore punk", price: '14.900', stock: 5, img: 'https://images.coveralia.com/audio/thumbs/78426g.jpg' },
      { id: "02", name: "Full Speed Ahead - D.r.i.", genre: "thrash", price: '$12.900', stock: 4, img: 'https://images.coveralia.com/audio/thumbs/236100g.jpg' },
      { id: "03", name: "Bleach - Nirvana", genre: "grunge", price: '14.900', stock: 3, img: 'https://images.coveralia.com/audio/thumbs/2344g.jpg' },
      { id: "05", name: "13 Songs - Fugazi", genre: "hardcore", price: '14.900', stock: 1, img: 'https://images.coveralia.com/audio/thumbs/250918g.jpg' },
      { id: "04", name: "Songs Of Praise - The Adicts", genre: "punk rock", price: '14.900', stock: 2, img: 'https://images.coveralia.com/audio/thumbs/128123g.jpg' },
    ];

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 3000);
        });

        getData
          .then((result) => {
            setProducts(result);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(true));
      }, []);
        
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


