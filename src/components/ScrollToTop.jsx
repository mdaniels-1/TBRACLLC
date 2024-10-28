// SOURCE: https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn
// By Kunal Ukey


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;