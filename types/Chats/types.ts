export type ChatType = {
  name: string;
  unreadMessages: number;
  imageUrl: string;
  userId: string;
  lastMessage: number;
  isOnline: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number
};