import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import ListItemDivider from "../General/ListItemDivider";
import ContactListItem from "./ContactListItem";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <SearchActions
        title="Contacts"
        label="Search Contacts"
        id="search-contacts-input"
      />
      <ListItemDivider letter="A" />
      <ul>
        <ContactListItem
          imageSrc="/general/IMG_2537.HEIC"
          name="Omar Hamid"
          contactId="1"
        />
      </ul>
    </div>
  );
};

export default Contacts;
