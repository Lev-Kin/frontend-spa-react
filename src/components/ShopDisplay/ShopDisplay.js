import React from "react";
import ProductList from "../ProductList/ProductList";
import CategoryList from "../CategoryList/CategoryList";
import { getProducts } from "../../data/products";
import { getCategories } from "../../data/categories";
import classes from "./ShopDisplay.module.css";

function ShopDisplay() {
  return (
    <div className={classes.ShopDisplay}>
      <div className={classes.categories}>
        <h3>Categories</h3>
        <CategoryList categories={getCategories()} />
      </div>
      <div className={classes.products}>
        <h3>All Products</h3>
        <ProductList products={getProducts()} />
      </div>
    </div>
  );
}

export default ShopDisplay;
