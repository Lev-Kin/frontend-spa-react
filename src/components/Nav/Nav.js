import "./Nav.css";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/">Special days</NavItem>
        <NavItem url="/">Delivery</NavItem>
        <NavItem url="/">Location</NavItem>
      </ul>
      <NavItem url="/">
        <Logo />
      </NavItem>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/">Discover</NavItem>
        <NavItem url="/account">Account</NavItem>
        <NavItem url="/">Search</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
