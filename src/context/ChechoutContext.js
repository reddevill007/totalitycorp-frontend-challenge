"use client";

import { createContext, useState } from "react";

export const ChechoutContext = createContext();

const CheckoutProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
  });

  return (
    <ChechoutContext.Provider value={{ details, setDetails }}>
      {children}
    </ChechoutContext.Provider>
  );
};

export default CheckoutProvider;
