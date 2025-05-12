
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <NavigationMenu className="max-w-screen-xl mx-auto w-full">
        <NavigationMenuList className="w-full flex justify-between">
          {/* Brand logo on the left */}
          <NavigationMenuItem className="mr-auto">
            <Link to="/">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all text-lg font-bold")}>
                JamaL.
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          {/* Menu items on the right */}
          <div className="flex">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/resume">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                  Resume
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-primary/80 transition-all font-bold")}>
                  Hire me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
