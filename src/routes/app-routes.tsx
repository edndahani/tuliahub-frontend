import Login from "@/pages/login";
import AboutUs from "@/pages/about-us";
import Home from "@/pages/home";
import Refreshments from "@/pages/refreshments";
import Rentals from "@/pages/rentals";
import Venues from "@/pages/venues";
import { Route, Routes } from "react-router-dom";
import App from "@/App";
import Register from "@/pages/register";
import { Toaster } from "@/components/ui/sonner";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/refreshments" element={<Refreshments />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default AppRoutes;
