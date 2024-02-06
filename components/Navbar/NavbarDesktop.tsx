import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";
import { PageStatesType } from "@/types/Navbar/types";
import { useContext } from "react";
import styles from "./NavbarDesktop.module.scss";
import { bottomNavItems, topNavItems } from "@/elements/NavbarElements";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";
import AuthContext from "@/context/AuthContext";

const NavbarDesktop = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const profileContext = useContext(ProfileContext);
  const { handleProfileInfoChange } = profileContext as ProfileContextType;

  const handleNavClick = (value: PageStatesType, resetProfile?: boolean) => {
    if (resetProfile) {
      handleProfileInfoChange(user!.id);
    }
    changePage(value);
  };

  // Convert the top navbar items into components
  const topNavComponents = topNavItems.map((navItem) => {
    return (
      <li
        key={navItem.pageName}
        onClick={() =>
          handleNavClick(
            navItem.pageName as PageStatesType,
            navItem.resetProfile
          )
        }
        className={curPage === navItem.pageName ? styles.selected : undefined}
      >
        {navItem.component}
      </li>
    );
  });

  // Convert the bottom navbar items into components
  const bottomNavComponents = bottomNavItems.map((navItem) => {
    return (
      <li
        key={navItem.pageName}
        onClick={() => handleNavClick(navItem.pageName as PageStatesType)}
        className={curPage === navItem.pageName ? styles.selected : undefined}
      >
        {navItem.component}
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <ul>{topNavComponents}</ul>
      <ul>{bottomNavComponents}</ul>
    </div>
  );
};

export default NavbarDesktop;
