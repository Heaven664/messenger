import { TextField } from "@mui/material";
import styles from "./Login.module.scss";
import { useContext, useRef, useState } from "react";
import loginRequest from "@/helpers/Api/loginRequest";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // Send login request to server and handle response
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    e.preventDefault();
    const userData = {
      email: emailRef.current!.value.trim(),
      password: passwordRef.current!.value.trim(),
    };
    // Send first request to validate input
    const { response, error } = await loginRequest(userData);

    if (error) {
      // Display error message
      setErrorMessage(error);
    } else {
      // Send second request to login user
      await signIn("credentials", {
        email: userData.email,
        password: userData.password,
        redirect: true,
        callbackUrl: "/",
      });
    }
  };

  return (
    <div className={styles.loginWindow}>
      <div className={styles.formHeaderSection}>
        <h2>Welcome Back </h2>
        <p>Sign in to continue to Messenger</p>
      </div>
      {errorMessage && (
        <div className={styles.errorMessageContainer}>
          <p>{errorMessage}</p>
        </div>
      )}
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
        <span
          className={styles.otherOption}
          onClick={() => router.push("/auth/register")}
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
