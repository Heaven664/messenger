import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import { rawContacts } from "@/dummyData";
import { ContactListType } from "@/types/Contacts/types";
import { contactsDataToContactsList } from "@/helpers/Contacts";
import GroupedContactList from "./GroupedContactList";
import { useMemo, useState } from "react";
``;
import { filterUsersByName } from "@/helpers/General";
import { Modal } from "@mui/material";
import ModalCustom from "../General/Modal";

export const Contacts = () => {
  const [modalState, setModalState] = useState(false);

  // Converts raw contacts into an ordered list of contacts
  const contacts = useMemo(() => contactsDataToContactsList(rawContacts), []);

  const [currentContacts, setCurrentContacts] = useState(contacts);

  // Changes current Contacts list based on input value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    const filteredContacts = filterUsersByName(contacts, newInputValue);
    setCurrentContacts(filteredContacts);
  };

  // Creates a list of GroupedContactList components based on currentContacts
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
        addAction={() => setModalState(true)}
        hasAddAction={true}
      />
      <ModalCustom
        header={"Add Contact"}
        isOpen={modalState}
        onClose={() => setModalState(false)}
      ></ModalCustom>
      <ul>{contactsList}</ul>
    </div>
  );
};

export default Contacts;
