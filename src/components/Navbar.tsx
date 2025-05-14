import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-md">
      {isMobile ? (
        <div className="mobile-menu px-4 py-2 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="text-lg font-bold !text-orange-500">
            JamaL.
          </Link>

          {/* Hamburger Menu */}
          <button
            className="hamburger-menu text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Menu */}
              <div className="absolute top-0 left-0 w-full h-screen bg-background shadow-md flex flex-col items-center justify-center z-50">
                <ul className="flex flex-col items-center space-y-4">
                  <li>
                    <Link
                      to="/"
                      className={cn(
                        "block py-2 px-4 text-lg hover:bg-primary/20 transition-all",
                        isActive("/") && "bg-secondary/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className={cn(
                        "block py-2 px-4 text-lg hover:bg-primary/20 transition-all",
                        isActive("/projects") && "bg-secondary/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resume"
                      className={cn(
                        "block py-2 px-4 text-lg hover:bg-primary/20 transition-all",
                        isActive("/resume") && "bg-secondary/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={cn(
                        "block py-2 px-4 text-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-all font-bold",
                        isActive("/contact") && "bg-primary/70"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hire me
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="text-lg font-bold !text-orange-500">
            JamaL.
          </Link>

          {/* Desktop Menu Items */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={cn(
                "text-sm sm:text-base hover:text-primary transition-colors",
                isActive("/") && "text-primary font-bold"
              )}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={cn(
                "text-sm sm:text-base hover:text-primary transition-colors",
                isActive("/projects") && "text-primary font-bold"
              )}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={cn(
                "text-sm sm:text-base hover:text-primary transition-colors",
                isActive("/resume") && "text-primary font-bold"
              )}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm sm:text-base bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors font-bold",
                isActive("/contact") && "bg-primary/70"
              )}
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;