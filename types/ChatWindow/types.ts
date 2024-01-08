export type HeaderInfoType = {
  name: string;
  userId: string;
  imageUrl: string;
  isOnline: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number;
};

export type MessageType = {
  messageId: string;
  senderId: string;
  senderName: string;
  senderImageUrl: string;
  messageBody: string;
  sentTime: number;
  viewed: boolean;
};
