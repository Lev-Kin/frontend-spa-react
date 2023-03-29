import React from "react";
import classes from "./DrawerNav.module.css";
import NavItem from "./NavItem/NavItem";
import { NavLink } from "react-router-dom";
import User from "../../assets/icon/userIcon.svg";
import signout from "../../assets/icon/sign-in-svgrepo-com.svg";
import CartLink from "../CartLink/CartLink";
import { useSelector } from "react-redux";

function DrawerNav({ callBack, toggle }) {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  const classNames = [classes.DrawerNav];

  if (toggle) {
    classNames.push(classes.toggle);
  }

  return (
    <div className={classes.DrawerNav}>
      <div className={classes.iconContainer}>
        {!isAuthenticated ? (
          <NavLink
            to={{ pathname: "/auth" }}
            state={{ authlink: isAuthenticated }}
            className={classes.icons}
          >
            <img src={User} className={classes.userIcon} alt="Account" />
          </NavLink>
        ) : null}
        {isAuthenticated ? (
          <NavLink
            to={{ pathname: "/signout" }}
            state={{ signoutlink: isAuthenticated }}
            className={classes.icons}
          >
            <img src={signout} className={classes.userIcon} alt="Singout" />
          </NavLink>
        ) : null}
        <NavLink to="/cart" className={classes.icons} alt="Cart">
          <CartLink />
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
          url="/special"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Special
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
          url="/contacts"
          onClick={callBack}
          className={classNames.join(" ")}
        >
          Contacts
        </NavItem>
      </ul>
    </div>
  );
}

export default DrawerNav;
