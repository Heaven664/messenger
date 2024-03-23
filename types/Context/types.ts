import { Dispatch, SetStateAction } from "react";
import { HeaderInfoType, MessageType } from "../ChatWindow/types";
import { NavbarItemType, PageStatesType } from "../Navbar/types";

export type PageContextType = {
  curPage: PageStatesType;
  changePage: (page: PageStatesType) => void;
};

export type HeaderContextType = {
  headerInfo: HeaderInfoType | null;
  changeChatWindowHeaderInfo: (value: HeaderInfoType | null) => void;
  setHeaderInfo: Dispatch<SetStateAction<HeaderInfoType | null>>;
};

export type MessagesContextType = {
  messages: MessageType[];
  setMessages: Dispatch<SetStateAction<MessageType[] | []>>;
};

export type NavbarContextType = {
  navbarItems: NavbarItemType[];
  addNewActivityBadge: (pageName: PageStatesType) => void;
  removeNewActivityBadge: (pageName: PageStatesType) => void;
};
