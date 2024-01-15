import { TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { useRef } from "react";

type P = {
  changeToRegister: () => void;
};

const LoginForm = ({ changeToRegister }: P) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: emailRef.current?.value.trim(),
      password: passwordRef.current?.value.trim(),
    };

    console.log(data);
  };

  return (
    <div className={styles.loginWindow}>
      <div className={styles.formHeaderSection}>
        <h2>Welcome Back </h2>
        <p>Sign in to continue to Messenger</p>
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
          <button>Log In</button>
        </div>
      </form>
      <div className={styles.RegisterOptionSection}>
        <p>Don&#39;t have an account? </p>{" "}
        <span className={styles.otherOption} onClick={changeToRegister}>
          Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
