import { RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";
import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Analytics from "../Pages/Analytics";
import Help from "../Pages/Help";
import Messages from "../Pages/Messages";
import NewCustomer from "../Pages/NewCustomer";
import Setting from "../Pages/Setting";
import { MainLayout } from "../template/mainLayout";
export const privateRoute: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <Dashboard />,
      },
      {
        path: ROUTES.customers,
        element: <Customers />,
      },
      {
        path: ROUTES.analytics,
        element: <Analytics />,
      },
      {
        path: ROUTES.help,
        element: <Help />,
      },
      {
        path: ROUTES.messages,
        element: <Messages />,
      },
      {
        path: ROUTES.newCustomer,
        element: <NewCustomer />,
      },
      {
        path: ROUTES.setting,
        element: <Setting />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <Navigate to={ROUTES.home} />,
  //   },
];
