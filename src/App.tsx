import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { PizzaPage } from "./components/pizzapage/PizzaPage";

// add paths, here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/", element: <PizzaPage /> }],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  // wrap Contexts around the router, here
  return <RouterProvider router={router} />;
}
