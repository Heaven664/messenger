import { useEffect } from "react";
import { io } from "socket.io-client";

export const useWebSocketConnection = (url: string) => {
  useEffect(() => {
    const socket = io(url);

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      socket.disconnect();
    };
  }, [url]);
};
