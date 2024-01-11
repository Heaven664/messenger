import { User } from "./types/User";

export const dummyCurrentUser: User = {
  id: "5",
  name: "Omar Hamid",
  residency: "Calgary, AB",
  profileImage: "/general/main.HEIC",
  email: "omarhamid@example.com",
  lastSeenPermission: true,
  lastSeenTime: new Date().getTime(),
};
