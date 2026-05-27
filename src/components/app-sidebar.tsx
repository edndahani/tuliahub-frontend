import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

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

const AppSidebar = () => {
  const { pathname } = useLocation();

  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="xs:mt-[65px] mt-[57px] lg:hidden"
    >
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {links.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild tooltip={item.label} isActive={pathname === item.to}>
                  <NavLink to={item.to}>
                    {item.label}
                  </NavLink>
                </SidebarMenuButton>
                {/* <SidebarMenuButton>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        sidebarMenuButtonVariants(),
                        isActive && "text-primary",
                      )
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </SidebarMenuButton> */}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
};

export default AppSidebar;
