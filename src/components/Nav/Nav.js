import "./Nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Discount</a>
        </li>
        <li>
          <a href="/">Delivery</a>
        </li>
        <li>
          <a href="/">Location</a>
        </li>
      </ul>
      <div>Luxury Feel</div>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Discover</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Search</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
