import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Checkout.module.css";
import { checkout } from "../../redux/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} $
          {product.price * items[product.productId]}
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }

  return (
    <div className={classes.Checkout}>
      <div className={classes.container}>
        <div className={classes.cartHeader}>
          <h1>Checkout</h1>
          <p>Please review items in your cart.</p>
        </div>
        <div className={classes.productList}>{output}</div>
        <div className={classes.totalPrice}>Total: ${total}</div>
        <form onSubmit={onCheckout}>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" required />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" required />
          </label>

          <button>Complete the order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
