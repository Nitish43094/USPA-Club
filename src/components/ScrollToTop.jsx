import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // agar smooth nahi chahiye to hata sakte ho
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
