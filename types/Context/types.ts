import { PageStatesType } from "../Navbar/types";

export type PageContextType = {
  curPage: PageStatesType;
  changePage: (page: PageStatesType) => void;
};
