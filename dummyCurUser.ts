import { User } from "./types/User";

export const dummyCurrentUser: User = {
  id: "1",
  name: "Omar Hamid",
  residency: "Calgary, AB",
  profileImage: "/general/main.HEIC",
  email: "omarhamid664@example.com",
  lastSeenPermission: true,
  lastSeenTime: new Date().getTime(),
};
