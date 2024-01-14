import { TextField } from "@mui/material";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.loginWindow}>
          <div className={styles.formHeaderSection}>
            <h2>Welcome Back </h2>
            <p>Sign in to continue to Messenger</p>
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
            <div className={styles.formSubmitContainer}>
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
