import React from "react";
import GiftItem from "./GiftItem";
import useFetchGifts from "../hooks/useFetchGifts";

const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts( category )

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading
        ? (<h2>Cargando...</h2>)
        : null
      }
      <div className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
export default GiftGrid;
