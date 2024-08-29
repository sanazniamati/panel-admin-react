/** @format */

import { FC, useEffect, useMemo, useState } from "react";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { privateRoute } from "./privateRoute";
import { Flex } from "antd";
import { publicRoute } from "./publicRoutes";
import { USER_TOKEN } from "../constants/localStorageKeys";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = localStorage.getItem(USER_TOKEN);

  useEffect(() => {
    setCurrentRoute(userToken ? privateRoute : publicRoute);
  }, [userToken]);

  // TODO
  const routes = useMemo(() => {
    return currentRoute && createBrowserRouter(currentRoute);
  }, [currentRoute]);

  if (!routes) {
    return (
      <Flex
        justify="center"
        align="center"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </Flex>
    );
  }
  return <RouterProvider router={routes} />;
};
