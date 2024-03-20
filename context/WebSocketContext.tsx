import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";
import { Socket } from "socket.io-client";

type WebSocketContextType = {
  socket: Socket | null;
  updateSocket: (socket: Socket | null) => void;
};

const WebSocketContext = createContext<WebSocketContextType>({
  socket: null,
  updateSocket: () => {},
});

const WebSocketContextProvider = ({ children }: ComponentProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const updateSocket = (socket: Socket | null) => {
    setSocket(socket);
  };

  const context: WebSocketContextType = {
    socket,
    updateSocket,
  };

  return (
    <WebSocketContext.Provider value={context}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContextProvider };
export default WebSocketContext;
