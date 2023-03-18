import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../assets/icon/cartIcon.svg";
import classes from "./CartLink.module.css";
//import { getProducts } from "../../data/products";

export default function CartLink() {
  // draft ---===
  //const products = getProduct(Object.keys(store.cart.items));
  //console.log(products)

  //  let output = products
  //  .filter((product) => product["productId"])
  //  .map((product) => product);
  // // let idProduct = products.productId;

  //  console.log(output);
  // ===============--------------

  // OK +++++
  // const items = useSelector((store) => store.cart.items);
  // const products = getProducts();

  // let prodId = products
  //   .filter((product) => items[product.productId])
  //   .map((product) => product.productId);
  // ===================

  // console.log(prodId);

  const number = useSelector((store) => {
    // console.log(store.cart);

    // const products = getProduct("_MG_0063");
    // console.log(products)
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <div className={classes.CartLink}>
      <img src={Cart} width="15px" alt="Cart" className={classes.cartIcon} />
      <span className={classes.number}>{number}</span>
    </div>
  );
}
