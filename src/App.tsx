/** @format */

import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import "./App.css";
import { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout className="App" style={{ background: "red" }}>
      <SideMenu collapsed={collapsed} />
      <PageContent collapsed={collapsed} setCollapsed={setCollapsed} />
    </Layout>
  );
}

export default App;
