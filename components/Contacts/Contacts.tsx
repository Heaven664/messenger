import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";
import ListItemDivider from "../General/ListItemDivider";
import ListItemContact from "../General/ListItemContact";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <SearchActions
        title="Contacts"
        label="Search Contacts"
        id="search-contacts-input"
      />
      <ListItemDivider letter="A" />
      <ListItemContact />
      <ListItemContact />
      <ListItemContact />
      <ListItemContact />
    </div>
  );
};

export default Contacts;
