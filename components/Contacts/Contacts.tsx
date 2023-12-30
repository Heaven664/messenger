import styles from "@/components/Contacts/Contacts.module.scss";
import ContactsActions from "./ContactsActions";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <ContactsActions />
    </div>
  );
};

export default Contacts;
