import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import { ContactListType } from "@/types/Contacts/types";
import { contactsDataToContactsList } from "@/helpers/Contacts";
import GroupedContactList from "./GroupedContactList";
import { useContext, useEffect, useMemo, useState } from "react";
import { filterUsersByName } from "@/helpers/General";
import ModalCustom from "../General/Modal";
import AddContactForm from "../General/AddContactForm";
import { useSession } from "next-auth/react";
import getContacts from "@/helpers/Api/getContacts";
import { User } from "@/types/User";
import WebSocketContext from "@/context/WebSocketContext";

export const Contacts = () => {
  const [modalState, setModalState] = useState(false);
  const [friends, setFriends] = useState<User[]>([]);

  const { socket } = useContext(WebSocketContext);

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

  // Update contacts list when added by other user
  useEffect(() => {
    if (socket) {
      socket.on("new contact", ({ friendship, adderEmail }) => {
        // Find the new friend and update the friends list
        const { _id, ...newFriend } = friendship?.find(
          (user: User) => user.email === adderEmail
        );
        setFriends((prev: User[]) => [...prev, newFriend]);
      });

      socket.on("contact removed", (removedEmail) => {
        // Find the new friend and update the friends list
        setFriends((prev: User[]) => {
          return prev.filter((contact: User) => contact.email !== removedEmail);
        });
      });

      return () => {
        socket.off("new contact");
      };
    }
  }, [socket, setFriends]);

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
    <GroupedContactList
      key={contact.letter}
      groupedContacts={contact}
      setFriends={setFriends}
    />
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
      <ul className={styles.contactsListContainer}>{contactsList}</ul>
    </div>
  );
};

export default Contacts;
