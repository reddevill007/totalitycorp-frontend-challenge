"use client";

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartItemContext = createContext();

const CartItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Total Price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.price;
    }, 0);
    setTotalPrice(parseFloat(total).toFixed(2));
  }, [cart]);

  //  Total unique item in cart
  useEffect(() => {
    const amount = cart.length;
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    toast("Item added to cart 😎", {
      type: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);

    toast("Item removed from cart 😢", {
      type: "success",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clearCart = () => {
    setCart([]);
    toast("Cleared your cart 😢", {
      type: "success",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const increaseCount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseCount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartItemContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseCount,
        decreaseCount,
        itemAmount,
        setItemAmount,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
