import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./ContactsActions.module.scss";
import { TextField } from "@mui/material";

const ContactsActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h3>Contacts</h3>
        <button>
          <AddIcon fontSize="inherit" />
        </button>
      </div>
      <div className={styles.bottomSection}>
        <TextField
          id="contact-search-field"
          variant="outlined"
          label="Search Contacts"
          className={styles.inputField}
        />
        <SearchIcon className={styles.searchIcon} fontSize="inherit"/>
      </div>
    </div>
  );
};

export default ContactsActions;
