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
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { API_URL, ENV } from "@/config";
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    console.log("ENV VARS:", import.meta.env);
    console.log("Running in:", ENV); // ✅ Optional debug log
    console.log("API:", API_URL); // ✅ Optional debug log
  
    const handleGlobalClick = async (event) => {
      if (["HTML", "BODY"].includes(event.target.tagName)) return;
      const element = event.target.tagName;
      const elementId = event.target.id || "N/A";
      const elementClass = event.target.className || "N/A";
      const pageUrl = window.location.href;
  
      try {
        const response = await fetch(`${API_URL}/analytics/clicks`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            origin: window.location.origin, // ✅ dynamically set
          },
          body: JSON.stringify({
            element,
            elementId,
            elementClass,
            pageUrl,
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error recording click:", error);
      }
    };
  
    document.addEventListener("click", handleGlobalClick);
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