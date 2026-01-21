import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [search]);

  return null;
}

export default ScrollToTop;
