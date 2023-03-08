import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <Header title="Enjoy your Shopping" image={headerImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur
        voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas
        id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus
        illum repudiandae tenetur.
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;
