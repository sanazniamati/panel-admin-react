import { Outlet, RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";
import Login from "../module/Login";

export const publicRoute: RouteObject[] = [
  {
    path: ROUTES.home,
    element: (
      <div>
        <Outlet />
      </div>
    ),
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
