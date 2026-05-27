import { Menu, X } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

const MenuBar = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="flex gap-1 justify-center items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden hover:text-accent-foreground rounded-md p-2 lg:hidden hover:bg-muted/60 border border-border/30 cursor-pointer"
    >
      {open ? (
        <X
          className={`max-md:h-7 max-md:w-7 max-md:stroke-1 stroke-1.5 h-5 w-5 transition-transform ${open ? "-rotate-90" : ""}`}
        />
      ) : (
        <Menu
          className={`max-md:h-7 max-md:w-7 max-md:stroke-1 stroke-2 h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`}
        />
      )}
      <span className="font-medium hidden md:block">Menu</span>
    </button>
  );
};

export default MenuBar;
