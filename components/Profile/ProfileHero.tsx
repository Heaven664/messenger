import Image from "next/image";
import styles from "./ProfileHero.module.scss";

const ProfileHero = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
            <Image
              src={"/general/main.HEIC"}
              width={150}
              height={150}
              alt="hero-image"
            />
          </div>
        </div>
        <p>Omar Hamid</p>
      </div>
      <hr />
    </div>
  );
};

export default ProfileHero;
