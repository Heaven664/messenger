import { ComponentProps } from "@/types/Layout/types";
import { NavbarItemType, PageStatesType } from "@/types/Navbar/types";
import { createContext, useState } from "react";
import { navItems } from "@/elements/NavbarElements";
import { NavbarContextType } from "@/types/Context/types";

const NavbarContext = createContext<NavbarContextType | null>(null);

const NavbarContextProvider = ({ children }: ComponentProps) => {
  const [navbarItems, setNavbarItems] = useState<NavbarItemType[]>(navItems);

  const addNewActivityBadge = (pageName: PageStatesType) => {
    setNavbarItems((prev) => {
      return prev.map((navItem) => {
        if (navItem.pageName === pageName) {
          navItem.newActivity = true;
        }
        return navItem;
      });
    });
  };

  const removeNewActivityBadge = (pageName: PageStatesType) => {
    setNavbarItems((prev) => {
      return prev.map((navItem) => {
        if (navItem.pageName === pageName) {
          navItem.newActivity = false;
        }
        return navItem;
      });
    });
  };

  const context = {
    navbarItems,
    addNewActivityBadge,
    removeNewActivityBadge,
  };

  return (
    <NavbarContext.Provider value={context}>{children}</NavbarContext.Provider>
  );
};

export { NavbarContextProvider };
export default NavbarContext;
