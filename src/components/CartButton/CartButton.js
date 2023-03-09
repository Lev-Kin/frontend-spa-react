import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from "./CartButton.module.css";
import React from "react";

export default function CartButton({ productId, price }) {
  const dispatch = useDispatch();

  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  function onAddToCart() {
    dispatch({ type: "cart/add", payload: productId });
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>
      Add to card - $ {product.price}
    </button>
  );
}
