import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import DashboardLayout from "../components/shared/DashboardLayout";
import Region from "../pages/dashboard/Region";
import Area from "../pages/dashboard/Area";
import RegionForm from "../pages/dashboard/RegionForm";
import AreaForm from "../pages/dashboard/AreaForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "region",
        element: <Region />,
      },
      {
        path: "region/new-region",
        element: <RegionForm />,
      },

      {
        path: "area",
        element: <Area />,
      },
      {
        path: "area/new-area",
        element: <AreaForm />,
      },
    ],
  },
]);

export default router;
