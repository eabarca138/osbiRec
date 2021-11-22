import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import { getFirestore } from  '../service/getFirestore'

import {CircularProgress, Container, Grid, Box, Alert, Stack, Fade } from '@mui/material/';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    alert: {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
});

const ItemDetailContainer = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [cant, setCant] = useState(1)
  const [alert, setAlert] = useState(false); 
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("items");
    dbQuery
      .doc(id)
      .get()
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((e) => console.log(e))
      .finally(() => setLoading(true));
  }, [id]);

const handleChange = (cant) => {
  setCant(cant);
  alert ? setAlert((prev) => !prev) : setAlert((prev) => !prev);
  setTimeout(() => {
    setAlert((prev) => !prev);
  }, 2000);
};

useEffect(() => {
  setAlert(false)
}, [])

const SuccessAlert = (
  <Stack  sx={{ width: "100%", display: { xs: "none", lg: "block"} }} spacing={2} className={classes.alert}> 
    <Alert severity="success">{cant} {cant > 1 ? "productos añadidos" : "producto añadido"} al carrito</Alert>
  </Stack>
);

  return (
    <div>
      <Box>
        <Box sx={{ position: 'absolute', right: '2rem', top: '5rem' }}>
          <Fade in={alert}>{SuccessAlert}</Fade>
        </Box>
      </Box>

    <Container sx={{ mt: 3 }}>
      {loading ? (
        <ItemDetail item={item} loading={loading} handleChange={handleChange}/>
      ) : (
          <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
        </Grid>
      )}
    </Container>
    </div>
  );
};
 
export default ItemDetailContainer;