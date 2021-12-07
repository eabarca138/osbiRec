import { styled } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Modal, Box, Container, Divider, Typography } from "@mui/material/";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:'100%', md:'800px'},
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};
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

const OrderModal = ({ order, orderId, open, handleClose }) => {
    function createData(name, quantity, subtotal) {
        return { name, quantity, subtotal };
      }
      const rows = order.items.map((item) => {
        return createData(
          item.name,
          item.quantity,
          item.subtotal,
        );
      });

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal}>
          <Container>
            <Typography variant="h6">Orden: {orderId}</Typography>
            <Divider />
            <Typography variant="h6">Estado: Pedido en proceso</Typography>

            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Producto</StyledTableCell>
                <StyledTableCell align="center">Cantidad</StyledTableCell>
                <StyledTableCell align="center">Subtotal</StyledTableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.subtotal}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
          </Table>
        </TableContainer>

          </Container>
        </Box>
      </Modal>
    );
}

export default OrderModal
