import { Outlet } from "react-router-dom";
import { Disclaimer } from "./pizzapage/comps/Disclaimer";

export const Home = () => {
  return (
    <div className="bg-yellow-100/60 font-robot">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Disclaimer />
    </div>
  );
};
