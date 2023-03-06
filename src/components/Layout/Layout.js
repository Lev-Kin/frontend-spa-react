import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <main className="Layout">
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
