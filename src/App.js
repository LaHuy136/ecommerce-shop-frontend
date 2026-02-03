// components
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import MenuLeft from "./components/Layout/MenuLeft";
import Footer from "./components/Layout/Footer";
import { useLocation } from "react-router-dom";
import MenuAccount from "./components/Layout/MenuAccount";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartProducts } from "./store/cartSlice";
import { fetchWishListProducts } from "./store/wishlistSlice";

function App(props) {
  const location = useLocation();

  const hideMenuPaths = ["/login", "/register", "/cart"];

  const shouldHideMenu = hideMenuPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  const hideMenuLeft = location.pathname.includes("/account");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
    dispatch(fetchWishListProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            {!shouldHideMenu && (hideMenuLeft ? <MenuAccount /> : <MenuLeft />)}
            {props.children}
            <ToastContainer position="bottom-right" autoClose={2000} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
