import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/header-img1.jpg";
import HomeDisplay from "../components/HomeDisplay/HomeDisplay";

function Home() {
  return (
    <>
      <Header
        title="To feel confident and elegant. We offer this incredible feeling."
        image={headerImage}
      >
        The best luxury quality at any time.
      </Header>
      <HomeDisplay />
    </>
  );
}

export default Home;
