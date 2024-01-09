import { ChatType } from "@/types/Chats/types";

/**
 * Move a chat to the first position in the array
 * @param arr array of chats
 * @param userId unique id of the chat to move to the front
 * @returns copy of the array with the chat moved to the front
 */
export const moveChatToFront = (arr: ChatType[], userId: string) => {
  // Find the index of the chat with the given userId in a chat object
  const index = arr.findIndex((chat) => chat.userId === userId);

  // Move a chat to the first position in the array
  arr.unshift(arr.splice(index, 1)[0]);
  return [...arr];
};
