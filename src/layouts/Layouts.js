import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { useEffect } from "react";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

const Layout = ({ children }) => {
  useEffect(() => {
    const loadScripts = async () => {
      await loadScript("/frontend/js/jquery.js");
      await loadScript("/frontend/js/bootstrap.min.js");
      await loadScript("/frontend/js/jquery.prettyPhoto.js");
      await loadScript("/frontend/js/jquery.scrollUp.min.js");
      await loadScript("/frontend/js/price-range.js");
      await loadScript("/frontend/js/html5shiv.js");
      await loadScript("/frontend/js/main.js");
    };

    loadScripts();
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
