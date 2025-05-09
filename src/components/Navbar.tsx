
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Briefcase, FileText, Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <NavigationMenu className="max-w-screen-xl mx-auto">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Home className="mr-2" size={16} />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/projects">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Briefcase className="mr-2" size={16} />
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/resume">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FileText className="mr-2" size={16} />
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Calendar className="mr-2" size={16} />
              Schedule a Call
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
