/** @format */

import {
  HomeOutlined,
  TeamOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  ControlOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { useEffect, useState } from "react";
const { Sider } = Layout;
import { useLocation, useNavigate } from "react-router-dom";
const { Title } = Typography;

// img
import Brand from "../../assets/img/Brand..png";

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
      {/* <img src={Brand} alt="Brand/> */}
      <Title level={4} style={{ color: "white", marginLeft: 32 }}>
        Brand .
      </Title>
      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => {
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
  );
};

export default SideMenu;
