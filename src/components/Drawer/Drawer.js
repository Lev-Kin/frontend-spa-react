import React from "react";
import DrawerNav from "../DrawerNav/DrawerNav";
import classes from "./Drawer.module.css";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];

  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <button onClick={toggle}>
        <div className={classes.content}>
          <DrawerNav callBack={toggle} />
        </div>
      </button>
    </div>
  );
}

export default Drawer;
