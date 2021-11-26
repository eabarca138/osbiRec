import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const isInCart = (id) => {
    const finder = cart.find((item) => item.id === id);
    return finder 
  }
  
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      item.quantity = quantity + isInCart(item.id).quantity;
      item.subtotal = item.quantity * item.price;
      setCart([...cart.filter((cartItem) => item.id !== cartItem.id), item]);
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
  
  const clpFormatter = (num) => {
    const reg=/\d{1,3}(?=(\d{3})+$)/g; 
    return ('$' +num + '').replace(reg, '$&.');
  }
  
  const totalCart = clpFormatter(cart.reduce((acc, product) => acc + product.subtotal, 0))
  
  return (
    <CartContext.Provider value={{ cart, totalCart, clearCart, addItem, removeItem, clpFormatter }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
