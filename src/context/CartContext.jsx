import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalCart = cart.reduce((acc, product) => acc + product.subtotal, 0)

  const showCart = () => {
    console.log(cart);
  };

  const isInCart = (id) => {
    const finder = cart.find((item) => item.id === id);
    return finder ? true : false
  }

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      item.quantity = quantity + item.quantity;
      item.subtotal = item.quantity * item.price;
      setCart(cart.filter(() => item.id !== cart.id));
    } else {
      item.quantity = quantity;
      item.subtotal = item.price * item.quantity;
      setCart([...cart, item]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, totalCart, showCart, clearCart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
