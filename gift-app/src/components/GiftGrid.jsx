import React from "react";



export const GiftGrid = ({ category }) => {

   getGifts(category);
  return (
    <>
      <h3>{category}</h3>
      <p>Description</p>
    </>
  );
};
