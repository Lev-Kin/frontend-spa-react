import React from "react";
import DrawerNav from "../DrawerNav/DrawerNav";
import classes from "./Drawer.module.css";

function Drawer({ open }) {
  const classNames = [classes.Drawer];

  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div className={classes.content}>
        <DrawerNav />
      </div>
    </div>
  );
}

export default Drawer;
