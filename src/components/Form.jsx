import { Modal, Box, Container, TextField, Button, Divider, Typography, CircularProgress } from '@mui/material/';
import { useForm } from "react-hook-form";


const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
  const input = {
    width: '100%',
    my: 2,
  };

  
  
  const Form = ({ stock, open, handleClose, generateOrder, loader }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal}>
          <Container>
            <Typography variant="h5">Información de Contacto</Typography>
            <Divider />
            <form onSubmit={handleSubmit(generateOrder)}>
              <TextField
                sx={input}
                variant="outlined"
                label="Nombre"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  maxLength: {
                    value: 20,
                    message: "máximo de caracteres es 20",
                  },
                })}
              />
              <Typography variant="caption" color="error">
                {errors.name && errors.name.message}
              </Typography>

              <TextField
                sx={input}
                variant="outlined"
                label="Teléfono"
                name="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  pattern: {
                    value:
                      /^(\(\+?\d{2,3}\)[*|\s|\-|.]?(([\d][|\s|\-|.]?){6})(([\d][\s|\-|.]?){2})?|(\+?[\d][\s|\-|.]?){8}(([\d][\s|\-|.]?){2}(([\d][\s|\-|.]?){2})?)?)$/,
                    message: "Error de formato",
                  },
                })}
              />
              <Typography variant="caption" color="error">
                {errors.phone && errors.phone.message}
              </Typography>

              <TextField
                sx={input}
                variant="outlined"
                label="E-mail"
                name="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Error de formato",
                  },
                })}
              />
              <Typography variant="caption" color="error">
                {errors.email && errors.email.message}
              </Typography>

                { loader ?
              <Box>
                {stock ? (
                  <Button type="submit" variant="contained" color="success">
                    realizar pedido
                  </Button>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" color="error">
                      Sin stock suficiente
                    </Typography>
                    <Button variant="outlined" color="info">
                      Volver
                    </Button>
                  </Box>
                )}
              </Box>
                :
                  <CircularProgress align="center"/>
              }
            </form>
          </Container>
        </Box>
      </Modal>
    );
}

export default Form





