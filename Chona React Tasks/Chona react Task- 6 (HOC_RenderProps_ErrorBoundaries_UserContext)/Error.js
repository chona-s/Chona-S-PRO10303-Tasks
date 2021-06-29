import React from "react";

function ProductInformation({ productName }) {
  if (productName === "Football") {
    throw new Error("Sports product not allowed");
  }
  return (
    <div>
      <h3>{productName}</h3>
    </div>
  );
}

export default ProductInformation;