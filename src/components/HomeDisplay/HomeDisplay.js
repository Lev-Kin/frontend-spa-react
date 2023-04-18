import React from "react";
import { Link } from "react-router-dom";
import classes from "./HomeDisplay.module.css";
import strong from "../../assets/component/right-header-strong-ai.jpg";
import unigue from "../../assets/component/center-header-unique-ai.jpg";
import quality from "../../assets/component/left-header-quality-ai.jpg";
import CategoryList from "../CategoryList/CategoryList";
import { getCategories } from "../../data/categories";

function HomeDisplay() {
  return (
    <>
      <div className={classes.HomeDisplay}>
        <div className={classes.container}>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <Link to="./shop">
              <button className={classes.discoverButton}>Discover Now</button>
            </Link>
            <div className={classes.first_section}>
              <span>
                <img src={strong} alt="Strong" />
                <h4>Strong</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
              <span>
                <img src={unigue} alt="Unique" />
                <h4>Unique</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
              <span>
                <img src={quality} alt="Quality" className={classes.quality} />
                <h4>Quality</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
            </div>
            <div className={classes.second_section}>
              <h4>Lorem Lorem</h4>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <CategoryList categories={getCategories()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDisplay;
