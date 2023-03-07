import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Shop() {
  return (
    <>
      <Header title="Enjoy your Shopping" image={headerImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur
        voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas
        id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus
        illum repudiandae tenetur.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Shop;
