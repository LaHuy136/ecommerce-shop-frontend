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
            <Route
              path="/shop"
              element={
                <MemberLayout>
                  <Shop />
                </MemberLayout>
              }
            />

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
