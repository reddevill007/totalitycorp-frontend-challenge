"use client";

import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
