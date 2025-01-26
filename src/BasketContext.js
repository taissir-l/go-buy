// BasketContext.js
import React, { createContext, useContext, useState } from "react";

// Create the Basket Context
const BasketContext = createContext();

// Provide a custom hook for accessing the basket context
export const useBasket = () => useContext(BasketContext);

// Create a provider component
export const BasketProvider = ({ children }) => {
  const [basket2, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter((product) => product.id !== productId));
  };

  return (
    <BasketContext.Provider value={{ basket2, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
