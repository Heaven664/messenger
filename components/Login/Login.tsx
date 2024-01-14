import styles from "./Login.module.scss";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [enterType, setEnterType] = useState("login");
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {enterType === "login" && (
          <LoginForm changeToRegister={() => setEnterType("register")} />
        )}
        {enterType === "register" && (
          <RegisterForm changeToLogIn={() => setEnterType("login")} />
        )}
      </div>
    </div>
  );
};

export default Login;
