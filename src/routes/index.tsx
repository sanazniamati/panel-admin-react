/** @format */

import { FC, useEffect, useMemo, useState } from "react";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { Flex } from "antd";
import { publicRoute } from "./publicRoutes";
import { useAppSelector } from "../app/hooks";
import { tokenSelector } from "../featchers/auth/authSlice";
import { USER_INFO } from "../constants/localStorageKeys";
import { useLazyGetMeQuery } from "../services/authApi/authApi";

interface IgetUserInfo {
  userInfo: { userName: string; userToken: string } | undefined;
  rememberMe: boolean;
}

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = useAppSelector(tokenSelector);
  const localToken = localStorage.getItem(USER_INFO);
  const sessionToken = sessionStorage.getItem(USER_INFO);

  const [trigger] = useLazyGetMeQuery();

  const getUserInfo = async ({ userInfo }: IgetUserInfo) => {
    try {
      if (userInfo && userInfo?.userToken) {
        await trigger(userInfo.userToken).then((response) => {
          if (response && response.isSuccess) {
            setCurrentRoute(privateRoutes);
          }
        });
      }
    } catch (error) {}
  };

  const checkUser = async () => {
    if (localToken || sessionToken) {
      const userInfo = localToken ? JSON.parse(localToken) : sessionToken ? JSON.parse(sessionToken) : undefined;
      getUserInfo({ userInfo, rememberMe: !!localToken });
    } else {
      setCurrentRoute(publicRoute);
    }
  };

  useEffect(() => {
    checkUser();
  }, [userToken]);

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
