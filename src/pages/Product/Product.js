import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from "./Product.module.css";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div className={classes.Product}>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button>Add to cart - $ {product.price}</button>
        </div>
      </div>
    </>
  );
}

export default Product;
