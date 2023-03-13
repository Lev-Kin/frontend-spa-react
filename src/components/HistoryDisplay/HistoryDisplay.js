import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";
import classes from "./HistoryDisplay.module.css";

function Orders() {
  const [orders, setOrders] = useState(null);
  const { localId } = useSelector((store) => store.auth);
  let allProducts = getProducts();
  let showProducts = [];

  useEffect(() => {
    axios
      .get(
        "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/orders.json"
      )
      .then(({ data }) => {
        const newItems = Object.keys(data).map((id) => {
          return { id, ...data[id] };
        });
        // console.log(newItems);
        setOrders(newItems);
      });
  }, []);

  let output = <h1>Loading...</h1>;
  if (orders !== null) {
    orders
      .filter((order) => order.idLocal === localId)
      .map((order) => {
        // console.log(Object.values(order.id).join("")); // redy to go injection
        return Object.keys(order.items).map((item) => {
          return showProducts.push(
            Object.assign(
              allProducts[
                allProducts.findIndex((product) => product.productId === item)
              ],
              { idOrder: order.id }
            )
          );
        });
      });

    console.log(showProducts);
    output = showProducts.map((product) => {
      return (
        <div key={product.productId} className={classes.HistoryDisplay}>
          <Link to={"/shop/" + product.productId}>
            <img src={product.image} alt={product.title} />
            <p>{product.idOrder}</p>
          </Link>
          <Link to={"/shop/" + product.productId}>Go product</Link>
        </div> 
      );
    });
  }

  return (
    <>
      <div className={classes.HistoryDisplayList}>{output}</div>
    </>
  );
}

export default Orders;
