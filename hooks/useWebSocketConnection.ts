import { ChatType } from "@/types/Chats/types";
import ChatsContext from "@/context/ChatsContext";
import WebSocketContext from "@/context/WebSocketContext";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { io } from "socket.io-client";

export const useWebSocketConnection = (url: string) => {
  const { updateSocket } = useContext(WebSocketContext);
  const { setAllChats } = useContext(ChatsContext);

  const session = useSession().data!;
  const email = session?.user?.email;

  useEffect(() => {
    const socket = io(url);
    updateSocket(socket);

    socket.on("connect", () => {
      socket.emit("join", email);
    });

    socket.on("disconnect", (reason, _) => {
      console.log("Disconnected from WebSocket server", reason);
    });

    socket.on("friend online", (email: string) => {
      setAllChats((prevChats) =>
        prevChats.map((chat: ChatType) => {
          if (chat.friendEmail === email) {
            return {
              ...chat,
              isOnline: true,
            };
          }
          return chat;
        })
      );
    });

    socket.on("friend offline", (email: string) => {
      setAllChats((prevChats) =>
        prevChats.map((chat: ChatType) => {
          if (chat.friendEmail === email) {
            return {
              ...chat,
              isOnline: false,
            };
          }
          return chat;
        })
      );
    });

    return () => {
      socket.off("friend online");
      socket.off("friend offline");
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
      updateSocket(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, email]);
};
