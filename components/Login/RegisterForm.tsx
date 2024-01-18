import { TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { useRef } from "react";
import { RegisterRequest } from "@/types/Api";
import registerRequest from "@/helpers/Api/registerRequest";

type P = {
  changeToLogIn: () => void;
};

const RegisterForm = ({ changeToLogIn }: P) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: RegisterRequest = {
      email: emailRef.current!.value.trim(),
      password: passwordRef.current!.value.trim(),
    };

    registerRequest(data);

    console.log(data);
  };

  return (
    <div className={styles.loginWindow}>
      <div className={styles.formHeaderSection}>
        <h2>Register Account </h2>
        <p>Get your Messenger account now!</p>
      </div>
      <form className={styles.formInputsSection} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <TextField
            type="email"
            id={"email"}
            variant="outlined"
            label={"Email"}
            className={styles.inputField}
            autoComplete="off"
            inputRef={emailRef}
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
            inputRef={passwordRef}
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
