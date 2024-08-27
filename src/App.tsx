/** @format */

import { ConfigProvider, ThemeConfig } from "antd";
import { useEffect } from "react";
import "./App.css";
import { Routes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectAuth, setUser } from "./featchers/authSlice";

function App() {
  // const { name } = useAppSelector(selectAuth);

  const user = JSON.parse(localStorage.getItem("userToken") || "{}");

  const themConfig: ThemeConfig = {
    components: {
      Button: {},
      Table: {
        headerBg: "transparent",
      },
    },
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userToken") || "{}");
    console.log("user :", user);
    // const dispatch = useAppDispatch();
    // dispatch(setUser(user));
  }, []);

  return (
    <ReduxProvider store={store}>
      <ConfigProvider theme={themConfig}>
        <ToastContainer />
        {name}
        <Routes />
      </ConfigProvider>
    </ReduxProvider>
  );
}

export default App;
