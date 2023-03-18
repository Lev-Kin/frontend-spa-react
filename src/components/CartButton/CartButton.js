import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from "./CartButton.module.css";
import {  add } from "../../redux/cartSlice";

export default function CartButton({ productId, price }) {
  const [size, setSize] = useState("");
  const [count, setAdd] = useState(0);
  const params = useParams();
  const product = getProduct(params.productId);
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  function onAddToCart() {
    // for one product ----
    dispatch(add(productId));
    // ====================

    // draft
    // let json = `{productId:${productId}, size:${size}`;
    //dispatch(add(json));
    // dispatch(add([[productId], [size]]));
    // =========--------------

    // OK ===
    // dispatch(image(productId));
    // dispatch(add(`${productId},${size}`));
    //============

    // console.log(productId);
    // console.log(size);

    setAdd(count + 1);
  }

  return (
    <>
      <div className={classes.textSelect}>Please select a size</div>
      <div
        className={classes.select}
        onChange={(event) => setSize(event.target.value)}
      >
        <label>
          <input type="radio" name="size" value="S" />
          <span>S</span>
        </label>
        <label>
          <input type="radio" name="size" value="M" />
          <span>M</span>
        </label>
        <label>
          <input type="radio" name="size" value="L" />
          <span>L</span>
        </label>
        <label>
          <input type="radio" name="size" value="XL" />
          <span>XL</span>
        </label>
      </div>
      {size ? (
        <>
          <button className={classes.CartButton} onClick={onAddToCart}>
            Add to cart - $ {product.price}
          </button>
          <div>
            Size selected: <b>{size}</b>
          </div>
        </>
      ) : (
        ""
      )}
      {count > 0 && (
        <div className={classes.textAdd}>
          <b>{count}</b> clothes added to cart
        </div>
      )}
    </>
  );
}
