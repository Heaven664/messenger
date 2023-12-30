import styles from "@/components/Contacts/Contacts.module.scss";
import SearchActions from "../General/SearchActions";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <SearchActions title="Contacts" label="Search Contacts" id="search-contacts-input"/>
    </div>
  );
};

export default Contacts;
