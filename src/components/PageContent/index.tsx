/** @format */

import { Breadcrumb, Button, Layout, theme } from "antd";
import AppRoutes from "../AppRoutes";
import AppHeader from "../AppHeader";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import CustomersTable from "../CustomerTable";

interface PageContentPropsInterface {
  collapsed: boolean;
  setCollapsed: any;
}
const { Content } = Layout;

const PageContent: React.FC<PageContentPropsInterface> = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {/* CustomerList */}
        <div
          style={{
            marginTop: 16,
            fontSize: 46,
            fontWeight: 500,
            // lineHeight: 72,
            color: "#212529",
            background: "lightGray",
          }}
        >
          <AppRoutes />
        </div>
      </Content>
    </Layout>
  );
};
export default PageContent;
