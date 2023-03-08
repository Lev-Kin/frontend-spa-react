import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/header-img1.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header
        title="To feel confident and elegant. We offer this incredible feeling."
        image={headerImage}
      >
        The best luxury quality at any time.
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;
