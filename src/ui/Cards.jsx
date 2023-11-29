import React from "react";
import ProductItem from "../features/products/ProductItem";

const Cards = ({ filterProduct }) => {
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filterProduct.slice(0, 8).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
