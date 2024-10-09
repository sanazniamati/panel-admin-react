/** @format */

import { io, Socket } from "socket.io-client";
import { SetStateAction, Dispatch, createContext, FC, PropsWithChildren, useState, useContext } from "react";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface GlobalContextInterface {
  values: {
    socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  };
  dispatch: {
    setSocket: Dispatch<SetStateAction<Socket<ServerToClientEvents, ClientToServerEvents> | undefined>>;
  };
}

export const GlobalContext = createContext<GlobalContextInterface>({
  values: {
    socket: undefined,
  },
  dispatch: {
    setSocket: () => {},
  },
});

export const GlobalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>();

  const sharedValues: GlobalContextInterface = {
    values: {
      socket: socket,
    },
    dispatch: {
      setSocket: setSocket,
    },
  };
  return <GlobalContext.Provider value={sharedValues}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
