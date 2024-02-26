import styles from "./Login.module.scss";
import RegisterForm from "./RegisterForm";
import Image from "next/image";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
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
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
