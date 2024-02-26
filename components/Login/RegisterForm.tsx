import { TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { useContext, useRef, useState } from "react";
import { RegisterRequest } from "@/types/Api";
import registerRequest from "@/helpers/Api/registerRequest";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const authContext = useContext(AuthContext);
  const { login } = authContext;

  // Send register request to server and handle response
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    e.preventDefault();
    const data: RegisterRequest = {
      email: emailRef.current!.value.trim(),
      password: passwordRef.current!.value.trim(),
      name: nameRef.current!.value.trim(),
    };

    const { response, error } = await registerRequest(data);
    if (error) {
      // Display error message
      setErrorMessage(error);
    } else {
      // Login user
      login(response);
    }
  };

  return (
    <div className={styles.loginWindow}>
      <div className={styles.formHeaderSection}>
        <h2>Register Account </h2>
        <p>Get your Messenger account now!</p>
      </div>
      {errorMessage && (
        <div className={styles.errorMessageContainer}>
          <p>{errorMessage}</p>
        </div>
      )}
      <form className={styles.formInputsSection} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <TextField
            type="name"
            id={"name"}
            variant="outlined"
            label={"Name"}
            className={styles.inputField}
            autoComplete="off"
            inputRef={nameRef}
            required={true}
          />
        </div>
        <div className={styles.inputContainer}>
          <TextField
            type="email"
            id={"email"}
            variant="outlined"
            label={"Email"}
            className={styles.inputField}
            autoComplete="off"
            inputRef={emailRef}
            required={true}
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
            required={true}
          />
        </div>
        <div className={styles.formSubmitContainer}>
          <button>Register</button>
        </div>
      </form>
      <div className={styles.RegisterOptionSection}>
        <p>Already have an account? </p>{" "}
        <span
          className={styles.otherOption}
          onClick={() => router.push("/auth/login")}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
