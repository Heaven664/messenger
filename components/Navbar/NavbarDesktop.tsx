import {
  QuestionAnswerOutlined,
  Group,
  Settings,
  AccountCircleRounded,
} from "@mui/icons-material/";
import styles from "./NavbarDesktop.module.scss";

const NavbarDesktop = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <AccountCircleRounded fontSize="inherit" />
        </li>
        <li>
          <Group fontSize="inherit" />
        </li>
        <li>
          <QuestionAnswerOutlined fontSize="inherit" />
        </li>
      </ul>
      <ul>
        <li id="settings-desktop-nav-button">
          <Settings fontSize="inherit" />
        </li>
      </ul>
    </div>
  );
};

export default NavbarDesktop;
