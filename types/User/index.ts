export type User = {
  id: string;
  name: string;
  email: string;
  residency: string;
  imageSrc: string;
  lastSeenPermission: boolean;
  lastSeenTime: number;
  isOnline?: boolean;
};

export interface UserContextInterface {
  user: User;
}
