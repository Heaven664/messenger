import { ChatType } from "@/types/Chats/types";

/**
 * Updates last message timestamp for a chat with id of receiver user
 * @param chats list of chats
 * @param receiverId id of receiver user
 * @returns shallow copy of chats with updated last message
 */
export const updateLatsMessage = (chats: ChatType[], receiverEmail: string) => {
  const newChats = chats.map((chat) => {
    if (chat.friendEmail === receiverEmail) {
      return {
        ...chat,
        lastMessage: new Date().getTime(),
      };
    }
    return chat;
  });
  return newChats;
};
