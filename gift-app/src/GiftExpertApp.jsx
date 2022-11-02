import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (value) => {
    setCategories(["hola", ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiftExpertAp</h1>

      {/* Input */}
      <AddCategory />

      {/* Gift List */}
      <ol>
        {categories.map((x, i) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
    </>
  );
};
