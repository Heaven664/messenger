import { useSession } from "next-auth/react";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.desktopItems}>
        <div className={styles.imageContainer}>
          <Image
            src={"/general/desktop-login-image.png"}
            alt="login-desktop-image"
            width={700}
            height={700}
            priority
          />
        </div>
      </div>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
