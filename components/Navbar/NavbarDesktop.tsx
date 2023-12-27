import {
  QuestionAnswerOutlined,
  Group,
  Settings,
  AccountCircleRounded,
} from "@mui/icons-material/";
import styles from "./NavbarDesktop.module.scss";
import { NavbarAction } from "@/types/Navbar/types";
import { useState } from "react";

const NavbarDesktop = () => {
  const [curPage, setCurPage] = useState<NavbarAction>(null);

  const handleNavClick = (value: NavbarAction) => {
    setCurPage(value);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li
          onClick={() => handleNavClick("profile")}
          className={curPage === "profile" ? styles.selected : undefined}
        >
          <AccountCircleRounded fontSize="inherit" />
        </li>
        <li
          onClick={() => handleNavClick("friends")}
          className={curPage === "friends" ? styles.selected : undefined}
        >
          <Group fontSize="inherit" />
        </li>
        <li
          onClick={() => handleNavClick("chats")}
          className={curPage === "chats" ? styles.selected : undefined}
        >
          <QuestionAnswerOutlined fontSize="inherit" />
        </li>
      </ul>
      <ul>
        <li
          onClick={() => handleNavClick("settings")}
          className={curPage === "settings" ? styles.selected : undefined}
        >
          <Settings fontSize="inherit" />
        </li>
      </ul>
    </div>
  );
};

export default NavbarDesktop;
