import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/shopHeader-img.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Shop() {
  return (
    <>
      <Header title="Enjoy your Shopping" image={headerImage}>
        Quos fugit eius eveniet dolore fugiat et autem, accusamus porro natus
        veniam facilis in nostrum dicta tenetur saepe deleniti enim quia sunt?
      </Header>

      <div style={{ borderBottom: "solid 1px grey", marginBottom: "2rem" }}>
        <h3
          style={{
            textAlign: "center",
            margin: "0 0 1rem",
            fontFamily: "Libre Baskerville",
          }}
        >
          Categories
        </h3>
        <CategoryList categories={getCategories()} />
      </div>

      <h3
        style={{
          textAlign: "center",
          margin: "0 0 1rem",
          fontFamily: "Libre Baskerville",
        }}
      >
        All Products
      </h3>
      <ProductList products={getProducts()} />
    </>
  );
}

export default Shop;
