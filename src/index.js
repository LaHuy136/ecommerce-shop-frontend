import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "../src/components/ProtectedRoute";
import GuestRoute from "../src/components/GuestRoute";
import "./index.css";

import App from "./App";
import Home from "./pages/member/Index";
import Cart from "./pages/carts/Cart";
import Checkout from "./pages/carts/Checkout";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import reportWebVitals from "./reportWebVitals";
import Shop from "./pages/products/Shop";
import ProductDetail from "./pages/products/Show";
import Blog from "./pages/blogs/Index";
import ShowBlog from "./pages/blogs/Show";
import Account from "./pages/accounts/Index";

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
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<ShowBlog />} />
            <Route path="/accounts" element={<Account />} />
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
