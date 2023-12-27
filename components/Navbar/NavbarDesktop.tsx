import {
  QuestionAnswerOutlined,
  Group,
  Settings,
  AccountCircleRounded,
} from "@mui/icons-material/";
import styles from "./NavbarDesktop.module.scss";
import { PageStatesType } from "@/types/Navbar/types";
import { useContext } from "react";
import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";

const NavbarDesktop = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;

  const handleNavClick = (value: PageStatesType) => {
    changePage(value);
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
