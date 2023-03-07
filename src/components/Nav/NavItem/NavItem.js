import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";
import React from "react";

function NavItem(props) {
  return (
    <li className={classes.NavItem}>
      <NavLink to={props.url} active={props.active}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;
