import React from "react";

const GiftItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};

export default GiftItem;
