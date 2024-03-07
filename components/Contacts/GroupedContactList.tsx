import { ContactListType } from "@/types/Contacts/types";
import ListItemDivider from "../General/ListItemDivider";
import ContactListItem from "./ContactListItem";
import { User } from "@/types/User";

interface P {
  groupedContacts: ContactListType;
  setFriends: React.Dispatch<React.SetStateAction<User[]>>;
}

const GroupedContactList = ({ groupedContacts: contacts, setFriends }: P) => {
  const groupedContactsList = contacts.contacts?.map((contact) => {
    return (
      <ContactListItem
        key={contact.email}
        email={contact.email}
        residency={contact.residency}
        imageSrc={contact.imageSrc}
        name={contact.name}
        id={contact.id}
        isOnline={contact.isOnline || false}
        lastSeenPermission={contact.lastSeenPermission}
        lastSeenTime={contact.lastSeenTime}
        setFriends={setFriends}
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
