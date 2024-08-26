/** @format */

import { FC, useEffect, useState } from "react";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { privateRoute } from "./privateRoute";
import { Flex } from "antd";
import { publicRoute } from "./publicRoutes";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>([]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setCurrentRoute(userToken ? privateRoute : publicRoute);
  }, []);

  if (!currentRoute.length) {
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
  const routes = createBrowserRouter(currentRoute);

  return <RouterProvider router={routes} />;
};
