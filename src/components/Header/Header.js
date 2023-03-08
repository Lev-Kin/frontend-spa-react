import React from "react";
import classes from "./Header.module.css";

function Header({ image, title, children }) {
  return (
    <header className={classes.Header}>
      <img src={image} alt="img" />
      <section>
        <div className={classes.Container}>
          <div className={classes.blur}>
            <h1>{title}</h1>
            <p>{children}</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
