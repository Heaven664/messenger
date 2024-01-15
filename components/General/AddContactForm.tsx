import { TextField } from "@mui/material";
import styles from "./AddContactForm.module.scss";
import { useRef } from "react";

const AddContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailRef.current?.value.trim());
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputSection}>
        <TextField
          variant="outlined"
          label={"Email"}
          placeholder="Enter Contact Email"
          className={styles.inputField}
          autoComplete="off"
          inputRef={emailRef}
        />
      </div>
      <div className={styles.buttonSection}>
        <button>Add Contact</button>
      </div>
    </form>
  );
};
export default AddContactForm;
