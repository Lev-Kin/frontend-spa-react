import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/aboutHeader-img.jpg";

function About() {
  return (
    <>
      <Header title="About us" image={headerImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit eius
        eveniet dolore fugiat et autem, accusamus porro natus veniam facilis in
        nostrum dicta tenetur saepe deleniti enim quia sunt? Id praesentium
        repellat consequuntur est magnam quo amet iste rem a voluptate sapiente
        error explicabo ipsa delectus ab ratione, et odio corrupti consequatur
        quos at fuga.
      </Header>
    </>
  );
}

export default About;
