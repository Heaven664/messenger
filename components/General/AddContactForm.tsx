import { TextField } from "@mui/material";
import styles from "./AddContactForm.module.scss";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import addContact from "@/helpers/Api/addContact";
import { User } from "@/types/User";

type P = {
  updateFriends: React.Dispatch<React.SetStateAction<User[]>>;
  closeModal: () => void;
};

const AddContactForm = ({ updateFriends, closeModal }: P) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const session = useSession()?.data;
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    e.preventDefault();
    const data = {
      email: session!.user.email,
      friendEmail: emailRef.current!.value.trim(),
    };
    const { response, error } = await addContact(data);
    if (error) {
      console.log(error)
      setErrorMessage(error);
      return;
    }
    if (response) {
      console.log(response)
      // Find the new friend and update the friends list
      const { _id, ...newFriend } = response?.find(
        (user: User) => user.email === data.friendEmail
      );
      updateFriends((prev: User[]) => [...prev, newFriend]);
      closeModal();
    }
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {errorMessage && (
        <div className={styles.errorContainer}>
          <p>{errorMessage}</p>
        </div>
      )}
      <div className={styles.inputSection}>
        <TextField
          variant="outlined"
          type="email"
          label={"Email"}
          placeholder="Enter Contact Email"
          className={styles.inputField}
          autoComplete="off"
          required={true}
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
