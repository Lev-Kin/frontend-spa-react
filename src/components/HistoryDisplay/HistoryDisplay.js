import axios from "axios";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { NavLink } from "react-router-dom";
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
        console.log(newItems);
        setOrders(newItems);
      });
  }, []);

  console.log(localId);
  console.log("orders");
  console.log(orders);
  let output = <h1>Loading...</h1>;
  if (orders !== null) {
    orders
      .filter((item) => item.idLocal === localId)
      .map((order) => {
        return Object.keys(order.items).map((item) => {
          return showProducts.push(
            allProducts[
              allProducts.findIndex((product) => product.productId === item)
            ]
          );
        });
      });
    console.log(showProducts);

    output = showProducts.map((product) => {
      return (
        <div key={product.productId} className={classes.radios}>
          <div className="row justify-content-center align-items-center my-5 px-3 mx-auto text-center">
            <div className="col-md-4 p-auto">
              <img
                src={product.image}
                alt={product.title}
                height={350}
                width={250}
              />
            </div>
            <div className="col-md-4 p-auto">
              <h3>{product.title}</h3>
              <NavLink
                to={`/products/${product.productId}`}
                className="btn btn-outline-dark lead"
              >
                Go product
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={classes.OrdersView}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>{output}</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
