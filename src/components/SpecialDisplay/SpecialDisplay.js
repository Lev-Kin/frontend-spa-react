import React from "react";
import classes from "./SpecialDisplay.module.css";
import specialCollage from "../../assets/component/specialCollage.jpg";

export default function SpecialDisplay() {
  return (
    <div className={classes.SpecialDisplay}>
      <div>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
            eius eveniet dolore fugiat et autem, accusamus porro natus veniam
            facilis in nostrum dicta tenetur saepe deleniti enim quia sunt? Id
            praesentium repellat consequuntur est magnam quo amet iste rem a
            voluptate sapiente error explicabo ipsa delectus ab ratione, et odio
            corrupti consequatur quos at fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
            eius eveniet dolore fugiat et autem, accusamus porro natus veniam
            facilis in nostrum dicta tenetur saepe deleniti enim quia sunt? Id
            praesentium repellat consequuntur est magnam quo amet iste rem a
            voluptate sapiente error explicabo ipsa delectus ab ratione, et odio
            corrupti consequatur quos at fuga.
          </p>
        </section>
        <div className={classes.special}>
          <img src={specialCollage} alt="Special Collage" />
          <section className={classes.specialSection}>
            <h1>About the special</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugit eius eveniet dolore fugiat et autem, accusamus porro natus
              veniam facilis in nostrum dicta tenetur saepe deleniti enim quia
              sunt? Id praesentium repellat consequuntur est magnam quo amet
              iste rem a voluptate sapiente error explicabo ipsa delectus ab
              ratione, et odio corrupti consequatur quos at fuga.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugit eius eveniet dolore fugiat et autem, accusamus porro natus
              veniam facilis in nostrum dicta tenetur saepe deleniti enim quia
              sunt? Id praesentium repellat consequuntur est magnam quo amet
              iste rem a voluptate sapiente error explicabo ipsa delectus ab
              ratione, et odio corrupti consequatur quos at fuga.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
