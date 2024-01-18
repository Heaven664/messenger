import { User } from "./types/User";

export const rawContacts: User[] = [
  {
    imageSrc: "/general/maksim-kek.jpg",
    name: "Maksim Sapun",
    id: "2",
    email: "maksimsapun@example.com",
    residency: "Calgary, AB",
    isOnline: false,
    lastSeenPermission: false,
    lastSeenTime: new Date("2024-01-04T15:30:45Z").getTime(),
  },
  {
    imageSrc: "/general/nikita-kek.jpg",
    name: "Nikita Syrotenko",
    id: "3",
    email: "nikitasirotenko@example.com",
    residency: "Calgary, AB",
    isOnline: false,
    lastSeenPermission: true,
    lastSeenTime: new Date().getTime() - 1000,
  },
  {
    imageSrc: "/general/ihor-kek.jpg",
    name: "Ihor Chupaha",
    id: "4",
    email: "ihorchupaha@example.com",
    residency: "Calgary, AB",
    isOnline: true,
    lastSeenPermission: true,
    lastSeenTime: new Date("2024-01-04T15:30:45Z").getTime(),
  },
  {
    imageSrc: "/general/omar-kek.JPG",
    name: "Omar Hamid",
    id: "5",
    email: "omarhamid@example.com",
    residency: "Calgary, AB",
    isOnline: false,
    lastSeenPermission: true,
    lastSeenTime: new Date().getTime() - 10000000,
  },
];
