import React from "react";
import { useDispatch } from "react-redux";
import { start } from "../../redux/authSlice";

export default function AuthDisplay() {
  const dispatch = useDispatch();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method: "signup",
      })
    );
  }

  return (
    <div>
      <form onSubmit={onAuthStart}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}
