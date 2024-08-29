/** @format */

import {
  HomeOutlined,
  TeamOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  ControlOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { useEffect, useState } from "react";
const { Sider } = Layout;
import { useLocation, useNavigate } from "react-router-dom";

// img
import Brand from "../../assets/img/Brand..png";

interface SideMenuPropsInterface {
  collapsed: boolean;
}

const SideMenu: React.FC<SideMenuPropsInterface> = ({ collapsed }) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/customers");
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <>
        <Space style={{ paddingLeft: 32, paddingBottom: 16, paddingTop: 32 }}>
          <img src={Brand} alt="Brand" style={{ height: 16 }} />
        </Space>
        {/* <Title level={4} style={{ color: "white", marginLeft: 32 }}>
          Brand .
        </Title> */}

        <Menu
          theme="dark"
          mode="inline"
          onClick={(item) => {
            navigate(item.key);
          }}
          style={{ paddingLeft: 12 }}
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
            {
              key: "/design",

              label: "Design System",
            },
          ]}
        />
      </>
    </Sider>
  );
};

export default SideMenu;
