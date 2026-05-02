import { useContext, type Dispatch, type SetStateAction } from "react";
import TuliaLogo from "../assets/logo/tuliahub.svg?react";
import HeaderCTA from "./header-cta";
import MenuBar from "./menu-bar";
import HeaderNav from "./header-nav";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./profile-icon";

type headerProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
};

const Header = ({ setIsOpen, isLogin }: headerProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 px-2 border-b">
      <div className="flex md:justify-between items-center transition-all duration-500 lg:mx-auto lg:max-w-7xl py-2 xs:py-4">
        <MenuBar setIsOpen={setIsOpen} />
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-1 md:gap-2"
        >
          <TuliaLogo className="h-8 w-auto" />
          <span className="font-medium text-lg md:font-semibold">TuliaHub</span>
        </div>
        {/* <p className="">{trial.toString()}</p> */}
        <HeaderNav />
        {isLogin ? <ProfileIcon /> : <HeaderCTA />}
      </div>
    </header>
  );
};

export default Header;
