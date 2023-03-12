import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/component/locationHeader-img.jpg";
import LocationDisplay from "../components/LocationDisplay/LocationDisplay";

function Location() {
  return (
    <>
      <Header title="Where are we?" image={headerImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur
        voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas
        id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus
        illum repudiandae tenetur.
      </Header>
      <LocationDisplay />
    </>
  );
}

export default Location;
