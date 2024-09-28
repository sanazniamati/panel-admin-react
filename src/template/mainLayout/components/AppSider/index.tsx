/** @format */

import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Space } from "antd";
const { Sider } = Layout;

// img
import Brand from "../../../../assets/img/Brand..png";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import SiderMenu from "../SiderMenu";
import { useMainLayoutContext } from "../../contex";
import { BreakPoints } from "../../../../constants/breakPointsNumber";

const AppSider: React.FC = () => {
  const { values, dispatch } = useMainLayoutContext();
  const { collapsed, openDrawer } = values;
  const { setCollapsed, setOpenDrawer } = dispatch;

  const isLaptop = useMediaQuery(BreakPoints.laptop); //greater than 991 is laptob size

  // const menu = <SiderMenu />;

  if (!isLaptop) {
    return (
      <Drawer title="Basic Drawer" onClose={() => setOpenDrawer(false)} open={openDrawer}>
        <SiderMenu />
      </Drawer>
    );
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className=" relative">
      <>
        <Space style={{ paddingLeft: 32, paddingBottom: 16, paddingTop: 32 }}>
          <img src={Brand} alt="Brand" style={{ height: 16 }} />
        </Space>

        <Button
          type="text"
          icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className={`bg-red-600 absolute top-[16px] z-10 ${collapsed ? "left-[60px]" : "left-[180px]"} `}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <SiderMenu />
      </>
    </Sider>
  );
};

export default AppSider;
