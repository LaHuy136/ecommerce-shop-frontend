// components
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/layouts/Header";
import MenuLeft from "./components/layouts/MenuLeft";
import Footer from "./components/layouts/Footer";
import { useLocation } from "react-router-dom";
import MenuAccount from "./components/layouts/MenuAccount";

function App(props) {
  const location = useLocation();

  const hideMenuPaths = ["/login", "/register"];

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
