import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (value) => {
    let valueRepeat = categories.find(
      (x) => x.toLowerCase() == value.toLowerCase()
    );

    if (valueRepeat != null) return;

    setCategories([value, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiftExpertAp</h1>

      {/* Input */}
      <AddCategory onNewValue={addCategory} />

      {/* Gift List */}
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
