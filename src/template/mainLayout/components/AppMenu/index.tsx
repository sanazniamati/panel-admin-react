/** @format */

import { useNavigate } from "react-router-dom";
import { menuItems } from "./menuItems";
import { Menu } from "antd";
import { useEffect, useState } from "react";

const AppMenu = () => {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/customers");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <Menu
      items={menuItems}
      defaultSelectedKeys={["2"]}
      theme="dark"
      mode="inline"
      onClick={(item) => {
        navigate(item.key);
      }}
      style={{ paddingLeft: 12 }}
      selectedKeys={[selectedKeys]}
    />
  );
};

export default AppMenu;
