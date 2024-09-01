/** @format */

import { FC, useState } from "react";
import SideMenu from "./components/SideMenu/index";
import PageContent from "./components/PageContent";
import { Layout } from "antd";
import { MainLayoutProvider } from "./contex";

export const MainLayout: FC = () => {
  // const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <MainLayoutProvider>
      <Layout>
        <SideMenu />
        <PageContent />
      </Layout>
    </MainLayoutProvider>
  );
};
