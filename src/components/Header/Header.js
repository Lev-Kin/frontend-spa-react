import React from "react";
import "./Header.css";
import headerImage from "../../assets/header-img1.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "top",
  };

  return (
    <header className="Header" style={style}>
      <div className="Container">
        <h1>
          To feel confident and elegant.
          <br />
          We offer this incredible feeling.
        </h1>
        <p>The best luxury quality at any time</p>
      </div>
    </header>
  );
}

export default Header;
