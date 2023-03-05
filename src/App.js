import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Shop from "./pages/Shop";
import Account from "./pages/Contacts";
import About from "./pages/About";
import SpecialDays from "./pages/SpecialDays";
import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Unveil from "./pages/Unveil";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialdays" element={<SpecialDays />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/unveil" element={<Unveil />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
