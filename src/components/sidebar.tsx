import type { Dispatch, SetStateAction } from "react";
import NavLinks from "./nav-links";

type sideBarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen }: sideBarProps) => {
  return (
    <aside className={`${isOpen ? "translate-x-full" : "translate-x-0"} fixed`}>
      <p>hello</p>
      <button>click</button>
      <NavLinks classNam="flex flex-col" />
    </aside>
  );
};

export default Sidebar;
