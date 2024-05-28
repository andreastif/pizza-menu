import { Outlet } from "react-router-dom";
import { Info } from "./PizzaPage/Info";

export const Home = () => {
  return (
    <div className="bg-yellow-100/60">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Info />
    </div>
  );
};
