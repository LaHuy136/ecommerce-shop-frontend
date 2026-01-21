import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

import App from "./App";
import Home from "./pages/Index";
import Account from "./pages/accounts/Account";
import Cart from "./pages/carts/Cart";
import Checkout from "./pages/carts/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import reportWebVitals from "./reportWebVitals";
import MemberLayout from "./layouts/Layouts";
import Shop from "./pages/products/Shop";
import Blog from "./pages/blogs/Index";
import Show from "./pages/blogs/Show";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App>
          {/* <ScrollToTop> */}
          <Routes>
            {/* PUBLIC */}
            <Route
              path="/"
              element={
                <MemberLayout>
                  <Home />
                </MemberLayout>
              }
            />
            {/* Shop */}
            <Route
              path="/shop"
              element={
                <MemberLayout>
                  <Shop />
                </MemberLayout>
              }
            />

            {/* Blogs */}
            <Route
              path="/blogs"
              element={
                <MemberLayout>
                  <Blog />
                </MemberLayout>
              }
            />

            <Route
              path="/blogs/:id"
              element={
                <MemberLayout>
                  <Show />
                </MemberLayout>
              }
            />

            {/* Auth */}
            <Route
              path="/login"
              element={
                <MemberLayout>
                  <Login />
                </MemberLayout>
              }
            />

            <Route
              path="/register"
              element={
                <MemberLayout>
                  <Register />
                </MemberLayout>
              }
            />
          </Routes>
          {/* </ScrollToTop> */}
        </App>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
