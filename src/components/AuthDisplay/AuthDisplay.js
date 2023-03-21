import axios from "axios";
import React, { useState, useEffect } from "react";
import { start } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./AuthDisplay.module.css";
import image from "../../assets/component/deliveryHeader-img.jpg";
import { addaside } from "../../redux/cartSlice";
import { getProducts } from "../../data/products";

export default function AuthDisplay() {
  const [asideProducts, setAsideCart] = useState(null);
  const { error, localId, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let asideProductUserId = [];
  const allProducts = getProducts();

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
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [loading]);

  /// im Here work - cart
  if (asideProducts !== null) {
    asideProducts
      .filter((asideProduct) => asideProduct.idLocal === localId)
      .map((asideProduct) => {
        console.log(asideProduct);
        return Object.keys(asideProduct.items).map((item) => {
          return asideProductUserId.push(
            allProducts[
              allProducts.findIndex((product) => product.productId === item)
            ]
          );
        });
        // work ---
        // return Object.keys(asideProduct.items).map((item) => {
        //   return dispatch(addaside(item));
        // });
      });
  }

  console.log(asideProductUserId);
  // ===
  if (asideProductUserId.length > 0) {
    // 2
    for (let i = 0; i < asideProductUserId.length; i++) {
      dispatch(addaside(asideProductUserId[i]["productId"]));
    }

    // work but add more 1
    // asideProductUserId.forEach((element) =>
    //   Object.keys(element).forEach((key) => {
    //     if (key === "productId") {
    //       console.log(element[key]);
    //       dispatch(addaside(element[key]));
    //     }
    //   })
    // );
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
