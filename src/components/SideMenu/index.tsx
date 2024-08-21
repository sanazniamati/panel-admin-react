/** @format */

import {
  HomeOutlined,
  TeamOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  ControlOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;
import { useLocation, useNavigate } from "react-router-dom";

interface SideMenuPropsInterface {
  collapsed: boolean;
}

const SideMenu: React.FC<SideMenuPropsInterface> = ({ collapsed }) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="demo-logo-vertical" /> */}
      <div style={{ border: "5px", padding: 20, color: "white" }}>Brand .</div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            key: "/",
            icon: <HomeOutlined />,
            label: "DASHBOARD",
          },
          {
            key: "/customers",
            icon: <TeamOutlined />,
            label: "CUSTOMERS",
          },
          {
            key: "/analytics",
            icon: <PieChartOutlined />,
            label: "ANALYTICS",
          },
          {
            key: "/messages",
            icon: <MailOutlined />,
            label: "MESSAGE",
          },
          {
            key: "/setting",
            icon: <ControlOutlined />,
            label: "SETTING",
          },
          {
            key: "/help",
            icon: <QuestionCircleOutlined />,
            label: "HELP CENTER",
          },
        ]}
      />
    </Sider>
    // </Layout>
  );
};

export default SideMenu;
