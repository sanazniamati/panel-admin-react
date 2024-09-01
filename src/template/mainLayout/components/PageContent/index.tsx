/** @format */

import { Layout, theme } from "antd";
// import AppRoutes from "../AppRoutes";
import AppHeader from "../AppHeader";
import { Outlet } from "react-router-dom";
import { useMainLayoutContext } from "../../contex";

const { Content } = Layout;

const PageContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { values, dispatch } = useMainLayoutContext();
  const { openDrawer } = values;
  const { setOpenDrawer } = dispatch;
  return (
    <Layout>
      <AppHeader openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
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
            color: "#212529",
            background: "lightGray",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
export default PageContent;
