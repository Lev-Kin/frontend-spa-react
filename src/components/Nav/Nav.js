import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import Search from "../../assets/icon-svg/search.svg";
import Cart from "../../assets/icon-svg/cartIcon.svg";
import User from "../../assets/icon-svg/userIcon.svg";

function Nav() {
  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/specialdays">Special days</NavItem>
        <NavItem url="/location">Location</NavItem>
      </ul>
      <NavLink to="/" className={classes.logo}>
        <Logo />
      </NavLink>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/account">Contacts</NavItem>
        <NavLink to="/search" className={classes.icons}>
          <img src={Search} className={classes.searchIcon} alt="Search" />
        </NavLink>
        <NavLink to="/account" className={classes.icons}>
          <img src={User} className={classes.userIcon} alt="Account" />
        </NavLink>
        <NavLink to="/cart" className={classes.icons}>
          <img src={Cart} className={classes.cartIcon} alt="Cart" />
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
