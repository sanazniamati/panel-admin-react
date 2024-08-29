import { FC, useState } from "react";
import SideMenu from "../components/SideMenu";
import PageContent from "../components/PageContent";
import { Layout } from "antd";

export const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Layout>
      <SideMenu
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <PageContent
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Layout>
  );
};
