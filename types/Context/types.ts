import { NavbarAction } from "../Navbar/types";

export type PageContextType = {
  curPage: NavbarAction;
  changePage: (page: NavbarAction) => void;
};
