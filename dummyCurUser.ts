import { ContactType } from "./types/Contacts/types";

export const dummyCurrentUser: ContactType = {
  contactId: "1",
  name: "Omar Hamid",
  residency: "Calgary, AB",
  imageSrc: "/general/main.HEIC",
  email: "omarhamid@example.com",
  isOnline: true,
  lastSeenPermission: true,
  lastSeenTime: new Date().getTime(),
};
