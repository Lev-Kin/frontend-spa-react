import React from "react";
import Nav from "../Nav/Nav";
import NavToggle from "../DrawerNav/NavToggle/NavToggle";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Nav />
        <NavToggle callBack={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;
