import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, IconButton, List, ListItem, Drawer, Container } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import './styles.css'

import { useCartContext } from "../context/CartContext";

const useStyles = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  linkDrawer: {
    textDecoration: "none",
    color:'#000000'
  },
  cartNumber: {
    background: "red",
    color: "white",
    borderRadius: "0.8em",
    width: "1.6em",
    padding: 0,
  },
});

const drawerWidth = 240;

const NavBar = (props) => {
  const classes = useStyles();
  
  const { cart } = useCartContext()

  const cartQuantity = cart.reduce((acc, el) => acc + el.quantity, 0)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button><Link to="/category/cds" className={classes.linkDrawer}>Cds</Link></ListItem>
      <ListItem button>
        <Link to="/category/vinyls" className={classes.linkDrawer}>Vinilos</Link>
      </ListItem>
      <ListItem button>
        <Link to="/category/blurays" className={classes.linkDrawer}>Bluurays</Link>
      </ListItem>
      <ListItem button>
        <Link to="/category/dvds" className={classes.linkDrawer}>Dvds</Link>
      </ListItem>
      <ListItem button>
      <CartWidget /><Link to="/cart" className={classes.linkDrawer}>Cart</Link>
      </ListItem>
    </List>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
        }}
      >
        <Container>
        <Toolbar sx={{marginLeft: 0, padding: 0}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Button className='logo'>
            <Link to="/" className='logo'>
              osbi records
            </Link>
          </Button>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Button sx={{ color: "white" }}>
              <Link className={classes.link} to="/category/cds">
                CDs
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link className={classes.link} to="/category/vinyls">
                Vinilos
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link className={classes.link} to="/category/blurays">
                Blurays
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link className={classes.link} to="/category/dvds">
                Dvds
              </Link>
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              marginLeft: "auto",
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <Link className={classes.link} to="/cart">
                <CartWidget />
              </Link>
            </IconButton>

            <Link to="/cart" className={classes.linkDrawer}>
              <Button>
                <span className={classes.cartNumber}>{cartQuantity}</span>
              </Button>
            </Link>

            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="nav"
        aria-label="mailbox folders"
        sx={{
          display: { md: "none" },
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default NavBar;
