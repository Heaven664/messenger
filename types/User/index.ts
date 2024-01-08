export type User = {
  id: string;
  name: string;
  residency: string;
  profileImage: string;
  email: string;
  lastSeenPermission: boolean;
  lastSeenTime: number;
};

export interface UserContextInterface {
  user: User;
}
