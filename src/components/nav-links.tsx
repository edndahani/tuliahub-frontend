import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Rentals",
    to: "/rentals",
  },
  {
    label: "Venues",
    to: "/venues",
  },
  {
    label: "Refreshments",
    to: "/refreshments",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
];

const NavLinks = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.label} className="">
              <NavLink
                to={link.to}
                className={({ isActive }) => {
                  const classes = cn(
                    navigationMenuTriggerStyle(),
                    isActive ? "text-primary" : "",
                  );
                  console.log(classes);
                  return classes;
                }}
              >
                {link.label}
              </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
    // <nav className={`${classNam}`}>
    //   {links.map(({ label, to }) => (
    //     <NavLink
    //       key={label}
    //       to={to}
    //       className="text-sm text-muted-foreground transition-all duration-200 aria-[current=page]:text-primary hover:text-hover"
    //     >
    //       {label}
    //     </NavLink>
    //   ))}
    // </nav>
  );
};

export default NavLinks;
