import React from "react";
import classes from "./NavToggle.module.css";

function NavToggle({ callBack, toggle }) {
  const classNames = [classes.NavToggle];

  if (toggle) {
    classNames.push(classes.toggle);
  }

  return (
    <button onClick={callBack} className={classNames.join(" ")}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </button>
  );
}

export default NavToggle;
