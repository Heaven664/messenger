import { User } from "./../User/index";
import { HeaderInfoType } from "../ChatWindow/types";
import { PageStatesType } from "../Navbar/types";
import { log } from "console";

export type PageContextType = {
  curPage: PageStatesType;
  changePage: (page: PageStatesType) => void;
};

export type HeaderContextType = {
  headerInfo: HeaderInfoType | null;
  changeChatWindowHeaderInfo: (value: HeaderInfoType | null) => void;
};
