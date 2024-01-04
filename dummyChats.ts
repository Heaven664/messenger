import { ChatType } from "./types/Chats/types";

export const dummyChats: ChatType[] = [
  {
    name: "Maksim Sapun",
    unreadMessages: 0,
    imageUrl: "/general/maksim-kek.jpg",
    userId: "1",
    lastMessage: new Date("2024-01-02T15:30:45Z").getTime(),
    isOnline: true,
  },
  {
    name: "Ihor Chupaha",
    unreadMessages: 1,
    imageUrl: "/general/ihor-kek.jpg",
    userId: "2",
    lastMessage: new Date("2024-01-02T15:30:43Z").getTime(),
    isOnline: true,
  },
  {
    name: "Nikita Syrotenko",
    unreadMessages: 2,
    imageUrl: "/general/nikita-kek.jpg",
    userId: "3",
    lastMessage: new Date("2024-01-02T15:31:41Z").getTime(),
    isOnline: false,
  },
  {
    name: "Omar Hamid",
    unreadMessages: 0,
    imageUrl: "/general/omar-kek.JPG",
    userId: "4",
    lastMessage: new Date("2023-01-02T15:30:45Z").getTime(),
    isOnline: false,
  },
];
