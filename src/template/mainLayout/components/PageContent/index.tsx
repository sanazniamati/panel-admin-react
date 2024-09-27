/** @format */

import { Layout } from "antd";
import AppHeader from "../AppHeader";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const PageContent: React.FC = () => {
  return (
    <Layout>
      <AppHeader />
      <Content className="px-8">
        <Outlet />
      </Content>
    </Layout>
  );
};
export default PageContent;
