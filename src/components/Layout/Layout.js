import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css"

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <main className={classes.Layout}>
      <Toolbar toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggle={toggleDrawer} />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
