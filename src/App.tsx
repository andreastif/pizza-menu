import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import ErrorPage from "./components/ErrorPage";

// add paths, here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  // wrap Contexts around the router, here
  return <RouterProvider router={router} />;
};
