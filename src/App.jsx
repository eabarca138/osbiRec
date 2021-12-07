import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

import NotFound from './components/NotFound'
import Smessage from './components/Smessage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import theme from './configTheme'

import {ThemeProvider } from "@mui/material/styles";
import CartContextProvider from './context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemList} />

            <Route exact path="/category/:categoryId" component={ItemList} />

            <Route exact path="/detail/:id" component={ItemDetailContainer} />

            <Route exact path="/cart" component={Cart} />
            
            <Route exact path="/order/:orderId" component={Smessage} />

            <Route exact path='*' component={NotFound} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </CartContextProvider>
  );
}

export default App;
