import React from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={classes.Footer}>
      <div>
        <p>FOOTER</p>
        <a href="/">luxury clothes</a>
      </div>
    </footer>
  );
}

export default Footer;
