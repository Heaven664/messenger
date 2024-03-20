import { Dispatch, SetStateAction } from "react";
import { HeaderInfoType, MessageType } from "../ChatWindow/types";
import { PageStatesType } from "../Navbar/types";

export type PageContextType = {
  curPage: PageStatesType;
  changePage: (page: PageStatesType) => void;
};

export type HeaderContextType = {
  headerInfo: HeaderInfoType | null;
  changeChatWindowHeaderInfo: (value: HeaderInfoType | null) => void;
};

export type MessagesContextType = {
  messages: MessageType[];
  setMessages: Dispatch<SetStateAction<MessageType[] | []>>;
};
