import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AnalyticsWidget from "./components/AnalyticsWidget";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleGlobalClick = async (event) => {
      const element = event.target.tagName; // Get the tag name of the clicked element
      const elementId = event.target.id || "N/A"; // Get the element's ID (if available)
      const elementClass = event.target.className || "N/A"; // Get the element's class name (if available)
      const pageUrl = window.location.href; // Get the current page URL

      try {
        await fetch("http://localhost:5000/api/analytics/clicks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ element, elementId, elementClass, pageUrl }),
        });
      } catch (error) {
        console.error("Error recording click:", error);
      }
    };

    // Add event listener for clicks
    document.addEventListener("click", handleGlobalClick);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/resume" element={<Layout><Resume /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;