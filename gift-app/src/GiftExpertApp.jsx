import React from "react";
import { useState } from "react";

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
      <input className="form-control" type="text" />
      <button className="btn btn-success" onClick={addCategory}> Add </button>

      {/* Gift List */}
      <ol>
        {categories.map((x, i) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
    </>
  );
};
