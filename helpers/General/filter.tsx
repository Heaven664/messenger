import { ContactListType, ContactType } from "@/types/Contacts/types";

// 
export const filterUsersByName = (contacts: ContactListType[], inputValue: string) => {
  const filteredContacts = contacts.filter((contact: any) =>
    contact.contacts.some((contact: ContactType) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  );
  return filteredContacts;
};
