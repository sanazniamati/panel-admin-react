/** @format */

import { FC, useState } from "react";
import AppSider from "./components/AppSider/index";
import PageContent from "./components/PageContent";
import { Layout } from "antd";
import { MainLayoutProvider } from "./contex";
import NotificationDrawer from "./components/NotificationDrawer";
import CommentsDrawer from "./components/CommentsDrawer";
import { GlobalContextProvider } from "../../globalContext";

export const MainLayout: FC = () => {
  // const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <GlobalContextProvider>
      <MainLayoutProvider>
        <Layout>
          <NotificationDrawer />
          <CommentsDrawer />
          <AppSider />
          <PageContent />
        </Layout>
      </MainLayoutProvider>
    </GlobalContextProvider>
  );
};
