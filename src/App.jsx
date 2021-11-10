import NavBar from './components/NavBar'
import ItemList from './components/ItemList'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
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
            <Route exact path="/">
              <ItemList />
            </Route>

            <Route exact path="/category/:categoryId">
              <ItemList />
            </Route>

            <Route exact path="/detail/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart" component={Cart} />
          </Switch>
        </ThemeProvider>
      </Router>
    </CartContextProvider>
  );
}

export default App;
