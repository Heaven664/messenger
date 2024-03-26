import { ChatType } from "@/types/Chats/types";
import { ContactListType } from "@/types/Contacts/types";
import { User } from "@/types/User";

/**
 * Filter contacts by input value
 * @param contacts - Array of ContactListType objects
 * @param inputValue - The input value to filter contacts by
 * @returns Array of filtered ContactListType objects
 */
export const filterUsersByName = (
  contacts: ContactListType[],
  inputValue: string
) => {
  const filteredContacts = contacts.filter((person: any) =>
    person.contacts.some((contact: User) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  );
  return filteredContacts;
};

/**
 * Transforms badge number to 9+ if number is greater than 9
 * @param number
 */
export const badgeNumberTransform = (number: number) => {
  if (number < 10) {
    return number;
  } else {
    return "9+";
  }
};

/**
 * Sort chats by last message timestamp
 * @param chats - Array of ChatType objects
 * @returns Array of sorted ChatType objects
 */
export const findChatByName = (chats: ChatType[], inputValue: string) => {
  const filteredChats = chats.filter((chat: ChatType) =>
    chat.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filteredChats;
};

