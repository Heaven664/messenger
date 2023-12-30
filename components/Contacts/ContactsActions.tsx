import styles from "./ContactsActions.module.scss";

const ContactsActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h3>Contacts</h3>
        <button>Add</button>
      </div>
      <div className={styles.bottomSection}>
        <h3>Search Contacts</h3>
      </div>
    </div>
  );
};

export default ContactsActions;
