import React from "react";
import "./Header.css";

function Header({ image, title, children }) {

  return (
    <header className="Header">
      <img src={image} alt="img" />
      <section>
        <div className="Container">
          <div className="blur">
            <h1>{title}</h1>
            <p>{children}</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
