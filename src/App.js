import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Special from "./pages/Special";
import Location from "./pages/Location";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import SignOut from "./pages/SignOut";
import SignIn from "./pages/SignIn";
import History from "./pages/History";
import TestNf from "./pages/TestNf";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/special" element={<Special />} />
          <Route path="/location" element={<Location />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:productId" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/testnf" element={<TestNf />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
