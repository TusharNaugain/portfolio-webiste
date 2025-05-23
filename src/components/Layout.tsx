
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Reset scroll position when navigating to a new page
    window.scrollTo(0, 0);
    
    // Wait a bit to show page with animation
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
