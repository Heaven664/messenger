import styles from "./Login.module.scss";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Image from "next/image";

const Login = () => {
  const [enterType, setEnterType] = useState("login");
  return (
    <div className={styles.layout}>
      <div className={styles.desktopItems}>
        <div className={styles.imageContainer}>
          <Image src={'/general/desktop-login-image.png'} alt="login-desktop-image" width={700} height={700} priority/>
        </div>
      </div>
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
