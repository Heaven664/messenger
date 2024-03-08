export type HeaderInfoType = {
  name: string;
  email: string;
  userId: string;
  imageUrl: string;
  isOnline?: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number;
};

export type MessageType = {
  _id?: string;
  senderEmail: string;
  receiverEmail: string;
  senderImageUrl: string;
  messageBody: string;
  sentTime: number;
  viewed?: boolean;
};
