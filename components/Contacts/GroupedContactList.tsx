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
        key={contact.id}
        email={contact.email}
        residency={contact.residency}
        imageSrc={contact.imageSrc}
        name={contact.name}
        id={contact.id}
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
