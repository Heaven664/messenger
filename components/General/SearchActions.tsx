import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchActions.module.scss";
import { TextField } from "@mui/material";
import { SearchActionsProps } from "@/types/General/types";

const SearchActions = ({
  title,
  label,
  id,
  onChange,
  addAction,
  hasAddAction,
}: SearchActionsProps) => {
  return (
    <div className={styles.container}>
      {hasAddAction && (
        <div className={styles.topSection}>
          <h3>{title}</h3>
          <button onClick={addAction}>
            <AddIcon fontSize="inherit" />
          </button>
        </div>
      )}
      <div className={styles.bottomSection}>
        <TextField
          id={id}
          variant="outlined"
          label={label}
          className={styles.inputField}
          onChange={onChange}
          autoComplete="off"
        />
        <SearchIcon className={styles.searchIcon} fontSize="inherit" />
      </div>
    </div>
  );
};

export default SearchActions;
