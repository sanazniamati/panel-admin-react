/** @format */

import { FC, useState } from "react";
import AppSider from "./components/AppSider/index";
import PageContent from "./components/PageContent";
import { Layout } from "antd";
import { MainLayoutProvider } from "./contex";
import NotificationDrawer from "./components/NotificationDrawer";
import CommentsDrawer from "./components/CommentsDrawer";

export const MainLayout: FC = () => {
  // const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <MainLayoutProvider>
      <Layout>
        <NotificationDrawer />
        <CommentsDrawer />
        <AppSider />
        <PageContent />
      </Layout>
    </MainLayoutProvider>
  );
};
