import React, { useEffect } from "react";
import { start } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./AuthDisplay.module.css";
import image from "../../assets/component/deliveryHeader-img.jpg";

export default function AuthDisplay() {
  const { error, localId } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  useEffect(() => {
    if (localId !== null) {
      navigate("/signin");
    }
  }, [navigate, localId]);

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
