import React from "react";

export const GiftItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
