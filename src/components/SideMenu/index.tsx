/** @format */

import {
  HomeOutlined,
  TeamOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  ControlOutlined,
  MailOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Space } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const { Sider } = Layout;
import { useLocation, useNavigate } from "react-router-dom";

// img
import Brand from "../../assets/img/Brand..png";
import { useMediaQuery } from "../../hooks/mediaQuery";

interface SideMenuPropsInterface {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuPropsInterface> = ({
  collapsed,
  setCollapsed,
  openDrawer,
  setOpenDrawer,
}) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/customers");
  const navigate = useNavigate();
  const isLaptop = useMediaQuery(991);
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const menu = (
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
  );
  if (!isLaptop) {
    return (
      <Drawer title="Basic Drawer" onClose={onClose} open={openDrawer}>
        {menu}
      </Drawer>
    );
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <>
        <Space style={{ paddingLeft: 32, paddingBottom: 16, paddingTop: 32 }}>
          <img src={Brand} alt="Brand" style={{ height: 16 }} />
        </Space>
        {/* <Title level={4} style={{ color: "white", marginLeft: 32 }}>
          Brand .
        </Title> */}
        <Button
          type="text"
          icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "red",
            position: "absolute",
            left: collapsed ? 60 : 180,
            top: 16,
            fontSize: "16px",
            width: 40,
            height: 40,
            zIndex: 3,
          }}
        />
        {menu}
      </>
    </Sider>
  );
};

export default SideMenu;
