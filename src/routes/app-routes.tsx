import AboutUs from "@/pages/about-us";
import Home from "@/pages/home";
import Refreshments from "@/pages/refreshments";
import Rentals from "@/pages/rentals";
import Venues from "@/pages/venues";
import { Route, Routes } from "react-router-dom";
import AppLayout from "@/components/layouts/app-layout";
import AuthLayout from "@/components/layouts/auth-layout";
import Register from "@/pages/register";
import Login from "@/pages/login";

const AppRoutes = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <Routes>
      <Route element={<AppLayout isLogin={isLogin} />}>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/refreshments" element={<Refreshments />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
