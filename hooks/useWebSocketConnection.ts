import WebSocketContext from "@/context/WebSocketContext";
import { MessageType } from "@/types/ChatWindow/types";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { io } from "socket.io-client";

export const useWebSocketConnection = (url: string) => {
  const { updateSocket } = useContext(WebSocketContext);
  const session = useSession().data!;
  const email = session?.user?.email;

  useEffect(() => {
    console.log("connecting to websocket");
    const socket = io(url);
    updateSocket(socket);

    socket.on("connect", () => {
      socket.emit("join", email);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      updateSocket(null);
      socket.off("private message");
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, email]);
};
