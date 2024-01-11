import { ContactType } from "./types/Contacts/types";

export const rawContacts: ContactType[] = [
  {
    imageSrc: "/general/omar-kek.JPG",
    name: "Omar Hamid",
    contactId: "1",
    email: "omarhamid@example.com",
    isOnline: false,
    lastSeenPermission: true,
    lastSeenTime: new Date().getTime() - 10000000,
  },
  {
    imageSrc: "/general/maksim-kek.jpg",
    name: "Maksim Sapun",
    contactId: "2",
    email: "maksimsapun@example.com",
    isOnline: false,
    lastSeenPermission: false,
    lastSeenTime: new Date("2024-01-04T15:30:45Z").getTime(),
  },
  {
    imageSrc: "/general/nikita-kek.jpg",
    name: "Nikita Syrotenko",
    contactId: "3",
    email: "nikitasirotenko@example.com",
    isOnline: false,
    lastSeenPermission: true,
    lastSeenTime: new Date().getTime() - 1000,
  },
  {
    imageSrc: "/general/ihor-kek.jpg",
    name: "Ihor Chupaha",
    contactId: "4",
    email: "ihorchupaha@example.com",
    isOnline: true,
    lastSeenPermission: true,
    lastSeenTime: new Date("2024-01-04T15:30:45Z").getTime(),
  },
];
