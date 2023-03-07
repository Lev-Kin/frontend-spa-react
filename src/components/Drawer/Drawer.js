import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";

function Drawer({ open }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open)
  };

  return (
    <div className={classNames.join(" ")}>
      <div className={classes.content}>
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;