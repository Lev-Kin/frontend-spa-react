import axios from "axios";
import React, { useState, useEffect } from "react";
import { start } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./AuthDisplay.module.css";
import image from "../../assets/component/deliveryHeader-img.jpg";
//import { getProducts } from "../../data/products";

export default function AuthDisplay() {
  const [asideProducts, setAsideCart] = useState(null);
  const { error, localId, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const allProducts = getProducts();
  // let pushProduct = [];


  function onAuthStart(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  useEffect(() => {
    if (localId !== null) {
      navigate("/");
    }
  }, [navigate, localId]);

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  // loading if auth - add setasidecart
  useEffect(() => {
    if (loading) {
      axios
        .get(
          "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/setasidecart.json"
        )
        .then(({ data }) => {
          const cartItems = Object.keys(data).map((id) => {
            return { id, ...data[id] };
          });
          console.log(cartItems);
          setAsideCart(cartItems);
        });
    }
  }, [loading]);

/// im Here 19.3  ==================================== need to add dispatch - cart
  if (asideProducts !== null) {
    asideProducts
      .filter((asideProduct) => asideProduct.idLocal === localId)
      .map((asideProduct) => {

 
        console.log(asideProduct)

        return asideProduct;

        // // console.log(Object.values(order.id).join("")); //injection order.id
        // return Object.keys(asideProduct.items).map((item) => {
        //   return pushProduct.push(
        //     Object.assign(
        //       allProducts[
        //         allProducts.findIndex((product) => product.productId === item)
        //       ]
        //     )
        //   );
        // });
      });
    }

  return (
    <>
      <div className={classes.Auth}>
        <img src={image} alt="Auth" />
        <form onSubmit={onAuthStart}>
          <h1>Sign in</h1>
          <p>
            Create an account to access your profile info, order history and
            more.
          </p>
          {errorOutput}
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button>Sign in</button>
          <button>Sign up</button>
        </form>
      </div>
    </>
  );
}
