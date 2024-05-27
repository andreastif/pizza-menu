import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className="text-6xl">Pizza Navbar</h1>
      <Outlet />
    </div>
  );
};
