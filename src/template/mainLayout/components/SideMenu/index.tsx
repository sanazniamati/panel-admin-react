/** @format */

import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Space } from "antd";
const { Sider } = Layout;

// img
import Brand from "../../../../assets/img/Brand..png";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import AppMenu from "../AppMenu";
import { useMainLayoutContext } from "../../contex";

const SideMenu: React.FC = () => {
  const { values, dispatch } = useMainLayoutContext();
  const { collapsed, openDrawer } = values;
  const { setCollapsed, setOpenDrawer } = dispatch;

  const isLaptop = useMediaQuery(991);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const menu = <AppMenu />;
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
