import React from "react";
import classes from "./Nav.module.css";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import User from "../../assets/icon/userIcon.svg";
import signout from "../../assets/icon/sign-in-svgrepo-com.svg";
import CartLink from "../CartLink/CartLink";

function Nav() {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);

  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/special">Special</NavItem>
        <NavItem url="/location">Location</NavItem>
      </ul>
      <NavLink to="/" className={classes.logo}>
        <Logo />
      </NavLink>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
        {!isAuthenticated ? (
          <NavLink
            to={{ pathname: "/auth" }}
            state={{ asignoutlink: isAuthenticated }}
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
        <NavLink to="/cart" className={classes.icons}>
          <CartLink />
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
