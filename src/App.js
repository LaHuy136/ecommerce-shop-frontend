// components
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import MenuLeft from "./components/Layout/MenuLeft";
import Footer from "./components/Layout/Footer";
import { useLocation } from "react-router-dom";
import MenuAccount from "./components/Layout/MenuAccount";

function App(props) {
  const location = useLocation();

  const hideMenuPaths = ["/login", "/register", "/cart"];

  const shouldHideMenu = hideMenuPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  const hideMenuLeft = location.pathname.includes("/account");

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            {!shouldHideMenu && (hideMenuLeft ? <MenuAccount /> : <MenuLeft />)}
            {props.children}
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
