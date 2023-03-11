import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/shopHeader-img.jpg";
import ShopDisplay from "../components/ShopDisplay/ShopDisplay";

function Shop() {
  return (
    <>
      <Header title="Enjoy your Shopping" image={headerImage}>
        Quos fugit eius eveniet dolore fugiat et autem, accusamus porro natus
        veniam facilis in nostrum dicta tenetur saepe deleniti enim quia sunt?
      </Header>

      <ShopDisplay />
    </>
  );
}

export default Shop;
