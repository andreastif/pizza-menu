import { Outlet } from "react-router-dom";
import { Info } from "./pizzapage/comps/Info";

export const Home = () => {
  return (
    <div className="bg-yellow-100/60 font-robot">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Info />
    </div>
  );
};
