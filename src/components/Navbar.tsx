
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Briefcase, FileText, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <NavigationMenu className="max-w-screen-xl mx-auto">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                <Home className="mr-2" size={16} />
                {!isMobile && "Home"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/projects">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                <Briefcase className="mr-2" size={16} />
                {!isMobile && "Projects"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/resume">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                <FileText className="mr-2" size={16} />
                {!isMobile && "Resume"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/20 transition-all")}>
                <Calendar className="mr-2" size={16} />
                {!isMobile && "Schedule a Call"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
