import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import classes from "./CartDisplay.module.css";
import history from "../../assets/icon/history-svgrepo-com.svg";
import { increment, decrement, remove } from "../../redux/cartSlice";

function CartDisplay() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  console.log(items);
 
  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      //=== one count prodid --
      total += product.price * items[product.productId];

      // console.log(items);
      // console.log(Object.keys(items));
      // console.log(typeof product.productId);
      // console.log(product);

      // OK =====
      // product["size"] = Object.keys(items)
      //   .filter((item) =>
      //     item.match(
      //       `${product.productId},S
      //       |${product.productId},M
      //       |${product.productId},L
      //       |${product.productId},XL
      //       |${product.productId},`
      //     )
      //   );
      //===========================

      // OK =====
      // for (const key in product.size) {
      //   total += product.price * items[product.size[key]];
      // }
      // ===========

      return (
        <div key={product.productId} className={classes.item}>
          <Link
            key={product.productId}
            to={"/cart/" + product.productId}
            className={classes.productCard}
          >
            <img
              src={product.image}
              alt={product.title}
              className={classes.productImage}
            />
            <div>{product.title}</div>
            {/* <div>Size 1213</div> */}
          </Link>
          <div>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(decrement(product.productId))}
            >
              -
            </button>
            <span className={classes.productQuantity}>
              {items[product.productId]}
            </span>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(increment(product.productId))}
            >
              +
            </button>
          </div>
          <span className={classes.productPrice}>
            ${product.price * items[product.productId]}
          </span>
          <button
            className={classes.deleteButton}
            onClick={() => dispatch(remove(product.productId))}
          >
            Delete
          </button>
        </div>
      );
    });

  let checkoutPath = "/checkout";
  if (!output.length) {
    output = (
      <>
        <div>No items in the cart.</div>
        <Link to="/shop">
          <button className={classes.checkoutButton}>Continue shopping</button>
        </Link>
      </>
    );
    checkoutPath = "/shop";
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
          <Link to={checkoutPath}>
            <button className={classes.checkoutButton}>Checkout</button>
          </Link>
          <div>
            <Link to="/history">
              <p>
                <img
                  src={history}
                  alt="History"
                  className={classes.history}
                  title="-= Go History =-"
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
