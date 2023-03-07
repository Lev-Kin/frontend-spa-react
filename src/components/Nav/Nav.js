import classes from "./Nav.module.css";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cartIcon.svg";
import User from "../../assets/userIcon.svg";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
        <ul>
          <NavItem url="/shop">Shop</NavItem>
          <NavItem url="/specialdays">Special days</NavItem>
          <NavItem url="/delivery">Delivery</NavItem>
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
          <NavLink to="/user" className={classes.icons}>
            <img src={User} className={classes.userIcon} alt="Account" />
          </NavLink>
          <NavLink to="/cart" className={classes.icons}>
            <img src={Cart} className={classes.cartIcon} alt="Cart" />
          </NavLink>
        </ul>
        <NavToggle />
      </div>
    </nav>
  );
}

export default Nav;
