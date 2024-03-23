import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";
import { PageStatesType } from "@/types/Navbar/types";
import { useContext } from "react";
import styles from "./NavbarDesktop.module.scss";
import ProfileContext from "@/context/ProfileContext";
import NavbarContext from "@/context/NavbarContext";
import { ProfileContextType } from "@/types/Profile/types";
import { useSession } from "next-auth/react";

const NavbarDesktop = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;
  const navbarContext = useContext(NavbarContext);
  const { navbarItems, removeNewActivityBadge } = navbarContext!;

  // Get authenticated user data from session
  const session = useSession().data!;
  const user = session?.user;

  const profileContext = useContext(ProfileContext);
  const { handleProfileInfoChange } = profileContext as ProfileContextType;

  // Handles the navigation click event and resets the profile page if one is clicked
  const handleNavClick = (value: PageStatesType, resetProfile?: boolean) => {
    if (resetProfile) {
      handleProfileInfoChange(user!.id);
    }
    removeNewActivityBadge(value);
    changePage(value);
  };

  // Convert the top navbar items into components
  const topNavComponents = navbarItems
    .filter((navItem) => navItem.layoutType === "topNav")
    .map((navItem) => {
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
          {navItem.newActivity && (
            <div className={styles.newActivityBadge}></div>
          )}
        </li>
      );
    });

  // Convert the bottom navbar items into components
  const bottomNavComponents = navbarItems
    .filter((navItem) => navItem.layoutType === "botNav")
    .map((navItem) => {
      return (
        <li
          key={navItem.pageName}
          onClick={() => handleNavClick(navItem.pageName as PageStatesType)}
          className={curPage === navItem.pageName ? styles.selected : undefined}
        >
          {navItem.component}
          {navItem.newActivity && (
            <div className={styles.newActivityBadge}></div>
          )}
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
