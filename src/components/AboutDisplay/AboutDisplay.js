import React from "react";
import classes from "./AboutDisplay.module.css";
import aboutCollage from "../../assets/component/aboutCollage.jpg";
import aboutWeAreV from "../../assets/component/aboutWeAreV.jpg";
import aboutWeAreH from "../../assets/component/aboutWeAreH.jpg";

function About() {
  return (
    <>
      <section className={classes.aboutSection}>
        <div className={classes.container}>
          <h1>About Luxary Feel</h1>
          <div className={classes.firstSection}>
            <div>
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
            </div>
            <img
              src={aboutCollage}
              alt="About us"
              className={classes.aboutCollage}
            />
          </div>
        </div>
        <div className={classes.darkBg}>
          <div className={classes.container}>
            <div className={classes.secondSection}>
              <h1>We are</h1>
              <img
                src={aboutWeAreV}
                alt="Fork"
                className={classes.aboutWeAreV}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                fugit eius eveniet dolore fugiat et autem, accusamus porro natus
                veniam facilis in nostrum dicta tenetur saepe deleniti enim quia
                sunt? Id praesentium repellat consequuntur est magnam quo amet
                iste rem a voluptate sapiente error explicabo ipsa delectus ab
                ratione, et odio corrupti consequatur quos at fuga.
              </p>
              <img
                src={aboutWeAreH}
                alt="Buffet"
                className={classes.aboutWeAreH}
              />
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.thirdSection}>
            <div className={classes.mission}>Lorem ipsum dolor sit</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
