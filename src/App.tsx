/** @format */

import { useEffect } from "react";
import "./App.css";
import { Routes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import { ConfigProviders } from "./components/ConfigProviders";

function App() {
  return (
    <ReduxProvider store={store}>
      <ConfigProviders>
        <Routes />
      </ConfigProviders>
    </ReduxProvider>
  );
}

export default App;
