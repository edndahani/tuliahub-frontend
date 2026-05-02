import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type menuBarProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuBar = ({ setIsOpen }: menuBarProps) => {
  return (
    <button onClick={() => setIsOpen(prev => !prev)} className="inline-flex gap-1 justify-center items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden hover:text-accent-foreground rounded-md p-2 lg:hidden hover:bg-muted/60 border border-border/30">
      <Menu className="stroke-1" />
      <span className="font-medium hidden md:block">Menu</span>
    </button>
  );
};

export default MenuBar;
