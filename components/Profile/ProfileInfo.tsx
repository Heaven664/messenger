import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import SmsOutlined from "@mui/icons-material/SmsOutlined";
import Person from "@mui/icons-material/Person";
import styles from "@/components/Profile/ProfileInfo.module.scss";
import { User } from "@/types/User";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

type P = {
  name: string;
  residency: string;
  email: string;
}

const ProfileInfo = ({name, residency, email} : P) => {
  // Import current user data from context and destruct it
  // const currentUserContext = useContext<User>(UserContext);
  // const currentUserData = currentUserContext;
  // const { name, residency, email } = currentUserData as User;

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
            <h3>{residency}</h3>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default ProfileInfo;
