import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";

function Drawer() {
  return (
    <div className={classes.Drawer}>
      <div className={classes.content}>
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;
