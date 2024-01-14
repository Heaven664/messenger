import { TextField } from "@mui/material";
import styles from "./Login.module.scss";

type P = {
  changeToLogIn: () => void;
};

const RegisterForm = ({ changeToLogIn }: P) => {
  return (
    <div className={styles.loginWindow}>
      <div className={styles.formHeaderSection}>
        <h2>Register Account </h2>
        <p>Get your Messenger account now!</p>
      </div>
      <form className={styles.formInputsSection}>
        <div className={styles.inputContainer}>
          <TextField
            id={"email"}
            variant="outlined"
            label={"Email"}
            className={styles.inputField}
            autoComplete="off"
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            type="password"
            id={"password"}
            variant="outlined"
            label={"Password"}
            className={styles.inputField}
            autoComplete="off"
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            id={"residency"}
            variant="outlined"
            label={"Residency"}
            className={styles.inputField}
            autoComplete="off"
          />
        </div>
        <div className={styles.formSubmitContainer}>
          <button>Register</button>
        </div>
      </form>
      <div className={styles.RegisterOptionSection}>
        <p>Already have an account? </p>{" "}
        <span className={styles.otherOption} onClick={changeToLogIn}>
          Sign In
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
