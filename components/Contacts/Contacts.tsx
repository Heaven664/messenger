import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import { rawContacts } from "@/dummyData";
import { ContactListType } from "@/types/Contacts/types";
import { contactsDataToContactsList } from "@/helpers/Contacts";
import GroupedContactList from "./GroupedContactList";
import { useState } from "react";
import { filterUsersByName } from "@/helpers/General/filter";

export const Contacts = () => {
  // Converts raw contacts into an ordered list of contacts
  const contacts = contactsDataToContactsList(rawContacts);

  const [currentContacts, setCurrentContacts] = useState(contacts);

  // Changes current Contacts list based on input value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    const filteredContacts = filterUsersByName(contacts, newInputValue);
    setCurrentContacts(filteredContacts);
  };

  const contactsList = currentContacts.map((contact: ContactListType) => (
    <GroupedContactList key={contact.letter} groupedContacts={contact} />
  ));

  return (
    <div className={styles.container}>
      <SearchActions
        title="Contacts"
        label="Search Contacts"
        id="search-contacts-input"
        onChange={handleInputChange}
      />
      <ul>{contactsList}</ul>
    </div>
  );
};

export default Contacts;
