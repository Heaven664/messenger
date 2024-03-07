import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import { ContactListType } from "@/types/Contacts/types";
import { contactsDataToContactsList } from "@/helpers/Contacts";
import GroupedContactList from "./GroupedContactList";
import { useEffect, useMemo, useState } from "react";
import { filterUsersByName } from "@/helpers/General";
import ModalCustom from "../General/Modal";
import AddContactForm from "../General/AddContactForm";
import { useSession } from "next-auth/react";
import getContacts from "@/helpers/Api/getContacts";
import { User } from "@/types/User";

export const Contacts = () => {
  const [modalState, setModalState] = useState(false);
  const [friends, setFriends] = useState<User[]>([]);

  const session = useSession().data;
  const user = session!.user;

  // Send get request to get contacts on page load
  useEffect(() => {
    getContacts(user.email)
      .then((res) => {
        setFriends(res.response);
      })
      .catch((error) => console.log(error));
  }, [user]);

  // Converts raw contacts into an ordered list of contacts
  const contacts = useMemo(
    () => contactsDataToContactsList(friends),
    [friends]
  );

  const [currentContacts, setCurrentContacts] = useState(contacts);

  // Update currentContacts when contacts change
  useEffect(() => {
    setCurrentContacts(contacts);
  }, [contacts]);

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
      >
        <AddContactForm
          updateFriends={setFriends}
          closeModal={() => setModalState(false)}
        />
      </ModalCustom>
      <ul>{contactsList}</ul>
    </div>
  );
};

export default Contacts;
