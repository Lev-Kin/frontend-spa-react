import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header-img1.jpg";

function Home() {
  return (
    <>
      <Header
        title="To feel confident and elegant. We offer this incredible feeling."
        image={headerImage}
      >
        The best luxury quality at any time.
      </Header>
    </>
  );
}

export default Home;
