import TuliaLogo from "../assets/logo/tuliahub.svg?react";
import HeaderCTA from "./header-cta";
import MenuBar from "./menu-bar";
import HeaderNav from "./header-nav";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./profile-icon";

type headerProps = {
  isLogin: boolean;
};

const Header = ({ isLogin }: headerProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 px-2 border-b">
      <div className="flex md:justify-between items-center transition-all duration-500 xs:h-16 h-14 lg:mx-auto lg:max-w-7xl py-2 xs:py-4">
        <MenuBar />
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-1 md:gap-2"
        >
          <TuliaLogo className="md:h-7 h-6 w-auto" />
          <span className="font-medium text-base md:text-lg md:font-semibold">TuliaHub</span>
        </div>
        {/* <p className="">{trial.toString()}</p> */}
        <HeaderNav />
        {isLogin ? <ProfileIcon /> : <HeaderCTA />}
      </div>
    </header>
  );
};

export default Header;
