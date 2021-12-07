import { AppBar, Box, Container } from "@mui/material/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCcMastercard, faCcAmex, faCcVisa, faCcPaypal, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles.css'

const Footer = () => {
    const footer = {
      bottom: 0,
      top: 'auto',
      }

    return (
      <AppBar position="absolute" color="primary" style={footer}>
        <Container sx={{ paddingTop:'.5rem', paddingBottom: '.5rem' }}>
          <Box container
            sx={{ display: "flex", justifyContent: {md: "space-between", xs:"center"}, alignItems: 'center'}}
          >
            <Box item xs={4} sx={{display: { xs: "none", md: "block" }}}>
              <small>© 2021 Osbi Records.</small>
              <br />
              <small>Todos los derechos reservados.</small>
            </Box>
            <Box>
              <Link to="/" className='logo'>
              osbi records
              </Link>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <a href="/#">
              <FontAwesomeIcon className='icono-footer' icon={faFacebook} size="lg"/>
              </a>
              <a href="/#">
              <FontAwesomeIcon className='icono-footer' icon={faInstagram} size="lg"/>
              </a>
              <a href="/#">
              <FontAwesomeIcon className='icono-footer' icon={faTwitter} size="lg"/>
              </a>
              </Box>
              </Box>
            <Box item xs={4} align="center" sx={{display: { xs: "none", md: "block" }}}>
            <FontAwesomeIcon className='icono-footer' icon={faCcAmex} size="2x"/>
            <FontAwesomeIcon className='icono-footer' icon={faCcMastercard} size="2x"/>
            <FontAwesomeIcon className='icono-footer' icon={faCcVisa} size="2x"/>
            <FontAwesomeIcon className='icono-footer' icon={faCcPaypal} size="2x"/>
            </Box>
          </Box>
          </Container>
      </AppBar>
    );
}

export default Footer
