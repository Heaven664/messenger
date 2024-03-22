export type ChatType = {
  name: string;
  unreadMessages: number;
  imageUrl: string;
  friendEmail: string;
  userId: string;
  lastMessage: number;
  isOnline: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number;
};

export type ChatsContextType = {
  allChats: ChatType[];
  setAllChats: React.Dispatch<React.SetStateAction<ChatType[]>>;
};
