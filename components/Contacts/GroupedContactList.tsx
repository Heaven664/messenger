import { ContactListType } from "@/types/Contacts/types";
import ListItemDivider from "../General/ListItemDivider";
import ContactListItem from "./ContactListItem";

interface P {
  groupedContacts: ContactListType;
}

const GroupedContactList = ({ groupedContacts: contacts }: P) => {
  const groupedContactsList = contacts.contacts.map((contact) => {
    return (
      <ContactListItem
        key={contact.contactId}
        email={contact.email}
        residency={contact.residency}
        imageSrc={contact.imageSrc}
        name={contact.name}
        contactId={contact.contactId}
        isOnline={contact.isOnline}
        lastSeenPermission={contact.lastSeenPermission}
        lastSeenTime={contact.lastSeenTime}
      />
    );
  });
  return (
    <ul>
      <ListItemDivider letter={contacts.letter} />
      {groupedContactsList}
    </ul>
  );
};

export default GroupedContactList;
