/** @format */

import { FC, useEffect, useMemo, useReducer, useState } from "react";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { privateRoute } from "./privateRoute";
import { Flex } from "antd";
import { publicRoute } from "./publicRoutes";
import { useAppSelector } from "../app/hooks";
import { tokenSelector } from "../featchers/auth/authSlice";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = useAppSelector(tokenSelector);

  useEffect(() => {
    // setCurrentRoute(userToken ? privateRoute : publicRoute);
    setCurrentRoute(privateRoute);
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
