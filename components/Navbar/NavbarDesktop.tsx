import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";
import { PageStatesType } from "@/types/Navbar/types";
import {
  AccountCircleRounded,
  Group,
  QuestionAnswerOutlined,
  Settings,
} from "@mui/icons-material/";
import { useContext } from "react";
import styles from "./NavbarDesktop.module.scss";

const navItems = [
  {
    pageName: "profile",
    component: <AccountCircleRounded fontSize="inherit"/>,
  },
  {
    pageName: "friends",
    component: <Group fontSize="inherit"/>,
  },
  {
    pageName: "chats",
    component: <QuestionAnswerOutlined fontSize="inherit"/>,
  },
];

const NavbarDesktop = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;

  const handleNavClick = (value: PageStatesType) => {
    changePage(value);
  };

  return (
    <div className={styles.container}>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.pageName}
              onClick={() => handleNavClick(navItem.pageName as PageStatesType)}
              className={curPage === navItem.pageName ? styles.selected : undefined}
            >
              {navItem.component}
            </li>
          );
        })}
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
