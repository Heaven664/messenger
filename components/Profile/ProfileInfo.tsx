import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import SmsOutlined from "@mui/icons-material/SmsOutlined";
import Person from "@mui/icons-material/Person";
import styles from "@/components/Profile/ProfileInfo.module.scss";

type P = {
  name: string;
  residency: string | null;
  email: string;
}

const ProfileInfo = ({name, residency, email} : P) => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div className={styles.profileInfoElement}>
            <Person fontSize="inherit" />
            <h3>{name}</h3>
          </div>
        </li>
        <li>
          <div className={styles.profileInfoElement}>
            <SmsOutlined fontSize="inherit" />
            <h3>{email}</h3>
          </div>
        </li>
        <li>
          <div className={styles.profileInfoElement}>
            <LocationOnOutlined fontSize="inherit" />
            <h3>{residency || "Not specified"}</h3>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default ProfileInfo;
