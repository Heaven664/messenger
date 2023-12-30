import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";
import { PageStatesType } from "@/types/Navbar/types";
import { useContext } from "react";
import styles from "./NavbarDesktop.module.scss";
import { bottomNavItems, topNavItems } from "@/elements/NavbarElements";

const NavbarDesktop = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;

  const handleNavClick = (value: PageStatesType) => {
    changePage(value);
  };

  // Convert the top navbar items into components
  const topNavComponents = topNavItems.map((navItem) => {
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
