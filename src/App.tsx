import { ConfigProvider, ThemeConfig } from "antd";
import "./App.css";
import { Routes } from "./routes";

function App() {
  const themConfig: ThemeConfig = {
    components: {
      Button: {},
      Table: {
        headerBg: "transparent",
      },
    },
  };
  return (
    <ConfigProvider theme={themConfig}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
