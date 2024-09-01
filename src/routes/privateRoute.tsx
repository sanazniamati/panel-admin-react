/** @format */

import { RouteObject, Navigate } from "react-router-dom";
import { ROUTES } from "./routesUrls";
import Dashboard from "../Pages/private/Dashboard";
import Customers from "../Pages/private/Customer";
import Analytics from "../Pages/private/Analytics";
import Help from "../Pages/private/Help";
import Messages from "../Pages/private/Messages";
import NewCustomer from "../Pages/private/NewCustomer";
import Setting from "../Pages/private/Setting";
import { MainLayout } from "../template/mainLayout/index";
import { replace } from "lodash";
import DesignSystem from "../Pages/private/DesignSystem";
export const privateRoute: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <Dashboard />,
      },
      // TODO :<Navigate to="/login" replace/>
      // {
      //   path: ROUTES.home,
      //   element: {<Navigate to="/login" replace/>},
      // },
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
      { path: ROUTES.design, element: <DesignSystem /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.home} />,
  },
];
