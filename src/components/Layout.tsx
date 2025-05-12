
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Basic analytics tracking
  useEffect(() => {
    // Log page views for analytics
    console.log(`Page viewed: ${location.pathname}`);
    // You could implement more sophisticated analytics here
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-purple-50">
      <header className="py-4 px-4">
        <Navbar />
      </header>
      <main className="flex-grow px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
