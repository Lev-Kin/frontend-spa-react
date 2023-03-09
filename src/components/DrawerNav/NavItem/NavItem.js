import { NavLink, useMatch } from "react-router-dom";
import classes from "./NavItem.module.css";
import React from "react";

function NavItem({ url, active, children }) {
  return (
    <li className={classes.NavItem}>
      <NavLink to={url} className={useMatch(url) ? classes.active : null}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
