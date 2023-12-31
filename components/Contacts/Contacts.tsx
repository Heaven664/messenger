import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import { rawContacts } from "@/dummyData";
import { ContactListType } from "@/types/Contacts/types";
import { contactsDataToContactsList } from "@/helpers/Contacts";
import GroupedContactList from "./GroupedContactList";

export const Contacts = () => {
  const contacts = contactsDataToContactsList(rawContacts);

  const contactsList = contacts.map((contact: ContactListType) => (
    <GroupedContactList key={contact.letter} groupedContacts={contact} />
  ));

  return (
    <div className={styles.container}>
      <SearchActions
        title="Contacts"
        label="Search Contacts"
        id="search-contacts-input"
      />
      <ul>{contactsList}</ul>
    </div>
  );
};

export default Contacts;
