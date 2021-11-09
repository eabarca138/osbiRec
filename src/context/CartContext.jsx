import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const showCart = () => {
    console.log(cart);
  };

  const addItem = (item) => {
    const finder = cart.find((obj) => obj.id === item.id);

    if (!finder) {
      item.subtotal = item.price * item.quantity;
      setCart([...cart, item]);
    } else {
      finder.quantity = item.quantity + finder.quantity;
      finder.subtotal = finder.quantity * item.price;
      setCart(cart.filter(x => finder.id !== cart.id));
    }
  };

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, showCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
