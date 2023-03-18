import React from "react";
import headerImage from "../assets/component/not-found-img.jpg";
import Header from "../components/Header/Header";

function TestNf() {
  return (
    <>
      <Header title="Page not found" image={headerImage}>
        Maybe the page you are looking for was moved or deleted.
      </Header>
    </>
  );
}

export default TestNf;
