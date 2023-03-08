import classes from "./DrawerNav.module.css";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/icon-svg/search.svg";
import Cart from "../../assets/icon-svg/cartIcon.svg";
import User from "../../assets/icon-svg/userIcon.svg";

function Nav({ callBack, toggle }) {
  const classNames = [classes.NavToggle];
  if (toggle) {
    classNames.push(classes.toggle);
  }

  return (
    <div className={classes.DrawerNav}>
      <div className={classes.iconContainer}>
        <NavLink to="/search" className={classes.icons}>
          <img src={Search} className={classes.searchIcon} alt="Search" />
        </NavLink>
        <NavLink to="/user" className={classes.icons}>
          <img src={User} className={classes.userIcon} alt="Account" />
        </NavLink>
        <NavLink to="/cart" className={classes.icons}>
          <img src={Cart} className={classes.cartIcon} alt="Cart" />
        </NavLink>
      </div>
      <ul>
        <NavItem
          url="/shop"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Shop
        </NavItem>
        <NavItem
          url="/specialdays"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Special days
        </NavItem>
        <NavItem
          url="/delivery"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Delivery
        </NavItem>
        <NavItem
          url="/location"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Location
        </NavItem>
        <NavItem
          url="/about"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          About
        </NavItem>
        <NavItem
          url="/account"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Contacts
        </NavItem>
      </ul>
    </div>
  );
}

export default Nav;
