import Image from "next/image";
import styles from "./ProfileHero.module.scss";

type P = {
  imageSrc: string;
  name: string;
}

const ProfileHero = ({imageSrc, name}: P) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
            <Image
              src={imageSrc}
              width={150}
              height={150}
              alt="hero-image"
            />
          </div>
        </div>
        <p>{name}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProfileHero;
