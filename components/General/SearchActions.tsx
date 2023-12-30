import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchActions.module.scss";
import { TextField } from "@mui/material";
import { SearchActionsProps } from "@/types/General/types";



const SearchActions = ({ title, label, id }: SearchActionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h3>{title}</h3>
        <button>
          <AddIcon fontSize="inherit" />
        </button>
      </div>
      <div className={styles.bottomSection}>
        <TextField
          id={id}
          variant="outlined"
          label={label}
          className={styles.inputField}
        />
        <SearchIcon className={styles.searchIcon} fontSize="inherit" />
      </div>
    </div>
  );
};

export default SearchActions;
