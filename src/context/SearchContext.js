"use client";

import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvoder = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, category, setCategory }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvoder;
