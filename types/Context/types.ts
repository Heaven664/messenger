import { HeaderInfoType } from "../ChatWindow/types";
import { PageStatesType } from "../Navbar/types";

export type PageContextType = {
  curPage: PageStatesType;
  changePage: (page: PageStatesType) => void;
};

export type HeaderContextType = {
  headerInfo: HeaderInfoType;
  changeChatWindowHeaderInfo: (value: HeaderInfoType) => void;
}