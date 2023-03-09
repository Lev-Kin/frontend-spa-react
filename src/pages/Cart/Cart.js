import React from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.item}>
          <Link to="" className={classes.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={classes.productImage}
            />
            {product.title}
          </Link>
          <div>
            <button
              className={classes.changeButton}
              onClick={() =>
                dispatch({ type: "cart/decrement", payload: product.productId })
              }
            >
              -
            </button>
            <span className={classes.productQuantity}>
              {items[product.productId]}
            </span>
            <button
              className={classes.changeButton}
              onClick={() =>
                dispatch({ type: "cart/increment", payload: product.productId })
              }
            >
              +
            </button>
          </div>
          <span className={classes.productPrice}>
            ${product.price * items[product.productId]}
          </span>
          <button
            className={classes.deleteButton}
            onClick={() =>
              dispatch({ type: "cart/delete", payload: product.productId })
            }
          >
            Delete
          </button>
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  return (
    <div className={classes.Cart}>
      <div className={classes.container}>
        <div className={classes.cartHeader}>
          <h1>Your Shopping Cart</h1>
          <p>Please review items in your cart.</p>
          {output}
        </div>
        <div className={classes.totalPrice}>
          <h2>Order summary</h2>
          Total: ${total} <br />
          <Link to="/checkout">
            <button className={classes.checkoutButton}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
