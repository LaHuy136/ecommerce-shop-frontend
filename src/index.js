import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Login from "../src/components/Member/Login";
import Register from "../src/components/Member/Register";
import Cart from "./components/Cart/Cart";
import Shop from "../src/components/Product/Shop";
import ProductDetail from "../src/components/Product/Detail";
import Blog from "../src/components/Blog/Index";
import ShowBlog from "../src/components/Blog/Detail";
import Account from "../src/components/Account/Index";
import Product from "../src/components/Member/Product";
import Create from "../src/components/Product/Create";
import Edit from "../src/components/Product/Edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/detail/:id" element={<ProductDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/detail/:id" element={<ShowBlog />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/product/list" element={<Product />} />
              <Route path="/account/product/add" element={<Create />} />
              <Route path="/account/product/:id" element={null} />
              <Route path="/account/product/:id/edit" element={<Edit />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </App>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
