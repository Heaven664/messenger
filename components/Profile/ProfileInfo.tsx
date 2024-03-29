import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import SmsOutlined from "@mui/icons-material/SmsOutlined";
import Person from "@mui/icons-material/Person";
import styles from "@/components/Profile/ProfileInfo.module.scss";

type P = {
  name: string | undefined;
  residency: string | undefined;
  email: string | undefined | null;
};

const ProfileInfo = ({ name, residency, email }: P) => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.profileInfoElement}>
          <Person fontSize="inherit" />
          <h3>{name || "Unknown"}</h3>
        </li>
        <li className={styles.profileInfoElement}>
          <SmsOutlined fontSize="inherit" />
          <h3>{email || "Unknown"}</h3>
        </li>
        <li className={styles.profileInfoElement}>
          <LocationOnOutlined fontSize="inherit" />
          <h3>{residency || "Not specified"}</h3>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default ProfileInfo;
