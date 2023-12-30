import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import SmsOutlined from "@mui/icons-material/SmsOutlined";
import Person from "@mui/icons-material/Person";
import styles from "@/components/Profile/ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div className={styles.profileInfoElement}>
            <Person fontSize="inherit" />
            <h3>Omar Hamid</h3>
          </div>
        </li>
        <li>
          <div className={styles.profileInfoElement}>
            <SmsOutlined fontSize="inherit" />
            <h3>omarhamid@example.com</h3>
          </div>
        </li>
        <li>
          <div className={styles.profileInfoElement}>
            <LocationOnOutlined fontSize="inherit" />
            <h3>Calgary, CA</h3>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default ProfileInfo;
