import React, { createContext, useState } from "react";
import { ProductData } from "../data/ProductData";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i <= ProductData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ProductContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const [quantity, setQuantity] = React.useState(0);

  const IncreseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const DecreseQuantity = () => {
    if (quantity <= 1) {
      return quantity;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const contextValue = {
    ProductData,
    cartItem,
    addToCart,
    removeFromCart,
    IncreseQuantity,
    DecreseQuantity,
    quantity,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
