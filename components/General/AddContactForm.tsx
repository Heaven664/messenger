import { TextField } from "@mui/material";
import styles from "./AddContactForm.module.scss";
import { useRef } from "react";
import { useSession } from "next-auth/react";

const AddContactForm = () => {
  const session = useSession()?.data;
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: session?.user.email,
      friendEmail: emailRef.current?.value.trim(),
    };
    console.log(data);
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputSection}>
        <TextField
          variant="outlined"
          type="email"
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
