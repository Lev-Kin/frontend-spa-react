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
  const allProducts = getProducts();
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
        setOrders(newItems);
      });
  }, []);

  let output = <h1>Loading...</h1>;
  if (orders !== null) {
    orders
      .filter((order) => order.idLocal === localId)
      .map((order) => {
        return Object.keys(order.items).map((item) => {
          return showProducts.push(
            Object.assign(
              { idOrder: order.id },
              allProducts[
                allProducts.findIndex((product) => product.productId === item)
              ]
            )
          );
        });
      });

    output = showProducts.map((product) => {
      return (
        <div
          key={product.idOrder + product.productId}
          className={classes.HistoryDisplay}
          idorderprop={product.idOrder}
        >
          <h4>Order</h4>
          <div className={classes.order}>{product.idOrder}</div>
          <Link to={"/shop/" + product.productId}>
            <img src={product.image} alt={product.title} />
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
