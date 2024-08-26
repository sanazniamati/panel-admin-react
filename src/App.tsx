/** @format */

import { ConfigProvider, ThemeConfig } from "antd";
import "./App.css";
import { Routes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, toast } from "react-toastify";

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
    <ReduxProvider store={store}>
      <ConfigProvider theme={themConfig}>
        <ToastContainer />
        <Routes />
      </ConfigProvider>
    </ReduxProvider>
  );
}

export default App;
