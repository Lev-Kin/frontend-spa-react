import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link, useNavigate } from "react-router-dom";
import classes from "./CheckoutDisplay.module.css";
import { checkout } from "../../redux/cartSlice";

function CheckoutDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = getProducts();

  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <li key={product.productId}>
          <div className={classes.orderItem}>
            <Link to={"/cart/" + product.productId}>{product.title}</Link>
            <span className={classes.productQuantity}>
              {items[product.productId]}
            </span>
            <span className={classes.productPrice}>
              ${product.price * items[product.productId]}
            </span>
          </div>
        </li>
      );
    });

  function onCheckout(event) {
    event.preventDefault();
    //
    //======================================= idLocal: localId
    // =====->
    const formData = new FormData(event.target);
    const order = {
      idLocal: localId,
      items: items,
      ...Object.fromEntries(formData.entries()),
    };
    dispatch(checkout(order));
    navigate("/");
  }

  return (
    <div className={classes.Checkout}>
      <div className={classes.container}>
        <h1>Checkout</h1>
        <p>Please review items in your cart.</p>
        <div className={classes.card}>
          <div className={classes.orders}>
            <h4>Your order</h4>
            <ul>{output}</ul>
            <div className={classes.totalPrice}>Total: ${total}</div>
          </div>
          <form onSubmit={onCheckout}>
            <h4>Billing details</h4>
            <label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
              />
            </label>
            <label>
              <input type="number" name="phone" placeholder="Phone" required />
            </label>
            <button>Complete the order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDisplay;
