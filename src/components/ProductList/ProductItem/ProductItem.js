import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <Link to={"/shop/" + product.productId}>
        <img src={product.image} alt={product.title} />
      </Link>
      <Link to={"/shop/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}

export default ProductItem;
