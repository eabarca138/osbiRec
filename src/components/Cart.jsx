import { useState } from 'react'
import Form from './Form'

import { getFirestore } from  '../service/getFirestore'
import firebase from 'firebase'
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container, IconButton, Button, Avatar } from "@mui/material/";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Cart = () => {
  const { cart, totalCart, clearCart, removeItem, clpFormatter } =
    useCartContext();

  const [order, setOrder] = useState({})
  //const [formData, setFormData] = useState({})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [stock, setStock] = useState(true)

  const finalizarCompra = () => {
    const order = {};
    order.items = cart.map((cartProd) => {
      const id = cartProd.id;
      const name = cartProd.name;
      const quantity = cartProd.quantity;
      const subtotal = cartProd.subtotal;
      return { id, name, quantity, subtotal };
    });
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.total = totalCart;
    setOrder(order)
    setStock(true)
    handleOpen()
  };
  
  const generateOrder = (data, e) => {
    //setFormData(data)
    const dbQuery = getFirestore();
    const buyer = data
    
    //Actualizar stock
    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((i) => i.id)
      );
      
      const batch = dbQuery.batch();
      
      const outOfStock = []

      itemsToUpdate.get().then((collection) => {
        collection.docs.forEach((docSnapshot, id) => {
          if (docSnapshot.data().stock >= cart[id].quantity) {
            batch.update(docSnapshot.ref, {
              stock:
              docSnapshot.data().stock -
              cart.find((item) => item.id === docSnapshot.id).quantity,
            });
            //Comprueba stock en firestore y agrega la orden
            dbQuery.collection("orders").add({ ...order, buyer });
            e.target.reset();
          }
          else{
            setStock(false)
            outOfStock.push({...docSnapshot.data(), id: docSnapshot.id})
            outOfStock.forEach(x => {
              removeItem(x.id)
            })
            return
          }
        });
        
        batch.commit();
      });
  };

  function createData(image, product, quantity, price, subtotal, button) {
    return { image, product, quantity, price, subtotal, button };
  }
  const rows = cart.map((product) => {
    return createData(
      <Avatar
        variant={"rounded"}
        alt="imagen producto"
        src={product.img}
        style={{
          width: 80,
          height: 80,
        }}
      />,
      product.name,
      product.quantity,
      clpFormatter(product.price),
      clpFormatter(product.subtotal),
      <IconButton onClick={() => removeItem(product.id)}>
        <DeleteIcon />
      </IconButton>
    );
  });

  return (
    <>
      <Container>
        <h3>Carro de Compras</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Producto</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">Cantidad</StyledTableCell>
                <StyledTableCell align="center">
                  Precio unitario
                </StyledTableCell>
                <StyledTableCell align="center">Subtotal</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            {cart.length ? (
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.product}>
                    <StyledTableCell component="th" scope="row">
                      {row.image}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.product}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.subtotal}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.button}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell>
                    <Button onClick={clearCart} variant="outlined">Vaciar carro</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    No hay productos agregados.
                    <Link to="/">
                      <Button>Ir al catálogo</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>

        {cart.length ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    Revisión del pedido
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Total: </TableCell>
                  <TableCell align="center">{totalCart}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <br />
        )}

        <Button variant="contained" onClick={finalizarCompra}>Finalizar compra</Button>
      </Container>

      <Form stock={stock} open={open} handleClose={handleClose} generateOrder={generateOrder}/>
    </>
  );
};

export default Cart;
