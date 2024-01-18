import { User } from "./types/User";

export const dummyCurrentUser: User = {
  id: "1",
  name: "Omar Hamid",
  residency: "Calgary, AB",
  imageSrc: "/general/main.HEIC",
  email: "omarhamid@example.com",
  lastSeenPermission: true,
  isOnline: true,
  lastSeenTime: new Date().getTime(),
};
