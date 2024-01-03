import { ChatType } from "./types/Chats/types";

export const dummyChats: ChatType[] = [
  {
    name: "Maksim Sapun",
    unreadMessages: 0,
    imageUrl: "/general/maksim-kek.jpg",
    chatId: "1",
    lastMessage: new Date("2024-01-02T15:30:45Z").getTime(),
  },
  {
    name: "Ihor Chupaha",
    unreadMessages: 1,
    imageUrl: "/general/ihor-kek.jpg",
    chatId: "2",
    lastMessage: new Date("2024-01-02T15:30:43Z").getTime(),
  },
  {
    name: "Nikita Syrotenko",
    unreadMessages: 2,
    imageUrl: "/general/nikita-kek.jpg",
    chatId: "3",
    lastMessage: new Date("2024-01-02T15:31:41Z").getTime(),
  },
  {
    name: "Omar Hamid",
    unreadMessages: 0,
    imageUrl: "/general/omar-kek.JPG",
    chatId: "4",
    lastMessage: new Date("2023-01-02T15:30:45Z").getTime(),
  },
];
