import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/specialHeader-img.jpg";
import SpecialDisplay from "../components/SpecialDisplay/SpecialDisplay";

function Special() {
  return (
    <>
      <Header title="Special" image={headerImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur
        voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas
        id, laboriosam necessitatibus, dolore corrupti.
      </Header>
      <SpecialDisplay />
    </>
  );
}

export default Special;
