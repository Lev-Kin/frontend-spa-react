import React from "react";
import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <Link to={"/categories/" + category.categoryId}>{category.title}</Link>
    </div>
  );
}

export default CategoryItem;
