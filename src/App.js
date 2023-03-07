import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import Account from "./pages/Contacts";
import About from "./pages/About";
import SpecialDays from "./pages/SpecialDays";
import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Unveil from "./pages/Unveil";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialdays" element={<SpecialDays />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/unveil" element={<Unveil />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
