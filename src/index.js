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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App>
          <Routes>
            <Route
              path="/"
              element={
                <MemberLayout>
                  <Home />
                </MemberLayout>
              }
            />
            {/* PUBLIC */}
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
            {/* <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </App>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
