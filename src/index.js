import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
// import "../src/assets/member/css/bootstrap.min.css";
// import "../src/assets/member/css/common.css";
// import "../src/assets/member/css/font-awesome.min.css";
/* eslint-disable no-undef */

import App from "./App";
import MemberDashboard from "./pages/members/Index";
import AdminDashboard from "./pages/admin/dashboards/Dashboard";
import Account from "./pages/members/Account";
import Cart from "./pages/members/Cart";
import Checkout from "./pages/members/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import reportWebVitals from "./reportWebVitals";
import MemberLayout from "./layouts/MemberLayout";
import AdminLayout from "./layouts/AdminLayout";

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
                  <MemberDashboard />
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

            {/* ADMIN */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
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
