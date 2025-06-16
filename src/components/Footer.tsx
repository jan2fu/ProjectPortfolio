
import * as React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 mt-12 bg-background/80">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} .JamaL. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground">
              Resume
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
