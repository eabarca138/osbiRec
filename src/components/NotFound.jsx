import { Box, Grid } from "@mui/material"

const NotFound = () => {
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh', marginTop: '3rem' }}
        >
      
        <Grid item xs={3} align="center">
            <Box>
                <h1>404</h1>
                <h2>Página no encontrada</h2>
            </Box>
        </Grid>   
         
      </Grid> 
    )
}

export default NotFound
