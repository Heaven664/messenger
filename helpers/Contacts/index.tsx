import { ContactListType } from "@/types/Contacts/types";
import { ContactType } from "@/types/Contacts/types";

/**
 * Coverts raw contacts into an ordered list of contacts
 * @param contacts - The raw contacts data
 * @returns An array of contacts grouped by first letter and sorted alphabetically
 */
export const contactsDataToContactsList = (
  contacts: ContactType[]
) => {
  // Create a Hash Map
  const contactsMap = new Map<string, ContactType[]>();

  // Create Hash Map entry for each contact data entity by first letter
  contacts.map((contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    const currentContacts = contactsMap.get(firstLetter);
    contactsMap.set(
      firstLetter,
      currentContacts ? [...currentContacts, contact] : [contact]
    );
  });

  // Convert the Hash Map into an array
  const returnArray = Array.from(contactsMap.entries()).map(
    ([letter, contacts]) => {
      return { letter, contacts };
    }
  );

  // Sort the array alphabetically
  const sortedArray = returnArray.sort(
    (a: ContactListType, b: ContactListType) => (a.letter > b.letter ? 1 : -1)
  );

  return sortedArray;
};
