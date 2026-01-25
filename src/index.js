import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

import App from "./App";
import Home from "./pages/Index";
import Cart from "./pages/carts/Cart";
import Checkout from "./pages/carts/Checkout";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import reportWebVitals from "./reportWebVitals";
import Shop from "./pages/products/Shop";
// import ProductDetail from "./pages/products/Show";
import Blog from "./pages/blogs/Index";
import ShowBlog from "./pages/blogs/Show";
import Account from "./pages/accounts/Index";
import Product from "./pages/member/Product";
import Create from "./pages/products/Create";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App>
          {/* <ScrollToTop> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/detail/:id" element={<ShowBlog />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/product/list" element={<Product />} />
            <Route path="/account/product/add" element={<Create />} />
            <Route path="/account/product/:id" element={null} />
            <Route path="/account/product/edit/:id" element={null} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* </ScrollToTop> */}
        </App>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
