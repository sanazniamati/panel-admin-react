/** @format */

import { Outlet, RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";
import Login from "../module/Login";
import LoginLayout from "../template/loginLayout";

export const publicRoute: RouteObject[] = [
  {
    path: ROUTES.login,
    element: <LoginLayout />,
    children: [
      {
        path: ROUTES.login,
        element: <Login />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <Navigate to={ROUTES.login} />,
  //   },
];
