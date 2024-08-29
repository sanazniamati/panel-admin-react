/** @format */

import { useEffect } from "react";
import "./App.css";
import { Routes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setUser } from "./featchers/authSlice";
import { ConfigProviders } from "./components/ConfigProviders";

function App() {
  // const { name } = useAppSelector(selectAuthName);
  // const dispatch = useAppDispatch();

  // const user = JSON.parse(localStorage.getItem("userToken") || "{}");

  // TODO
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userToken") || "{}");
    console.log("user :", user);
    // dispatch(setUser(user));
  }, []);

  return (
    <ReduxProvider store={store}>
      <ConfigProviders>
        <ToastContainer />

        <Routes />
      </ConfigProviders>
    </ReduxProvider>
  );
}

export default App;
