/** @format */

import { FC, ReactNode } from "react";
import { useOverride } from "./override";
import { ConfigProvider, ThemeConfig, App } from "antd";

interface Iprops {
  children: ReactNode;
}

export const ConfigProviders: FC<Iprops> = ({ children }) => {
  const { lightThemeComponents } = useOverride();

  const antdTheme: ThemeConfig = {
    components: lightThemeComponents,
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
