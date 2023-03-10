import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from "./ProductDisplay.module.css";
import CartButton from "../CartButton/CartButton";

function ProductDisplay() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div className={classes.ProductDisplay}>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <CartButton
            className={classes.cartButton}
            productId={params.productId}
          />
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
