/** @format */
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";

interface ContextInterface {
  values: {
    collapsed: boolean;
    openDrawer: boolean;
  };
  dispatch: {
    setCollapsed: Dispatch<SetStateAction<boolean>>;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  };
}

// create contex and set initial value
export const MainLayoutContext = createContext<ContextInterface>({
  values: {
    collapsed: false,
    openDrawer: false,
  },
  dispatch: { setCollapsed: () => {}, setOpenDrawer: () => {} },
});

export const MainLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const sharedValues: ContextInterface = {
    values: {
      collapsed: collapsed,
      openDrawer: openDrawer,
    },
    dispatch: {
      setCollapsed: setCollapsed,
      setOpenDrawer: setOpenDrawer,
    },
  };

  return <MainLayoutContext.Provider value={sharedValues}>{children}</MainLayoutContext.Provider>;
};

export const useMainLayoutContext = () => useContext(MainLayoutContext);
