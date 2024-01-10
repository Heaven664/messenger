import { useContext, useEffect, useState } from "react";
import SearchActions from "../General/SearchActions";
import ChatList from "./ChatList";
import styles from "./Chats.module.scss";
import { findChatByName } from "@/helpers/General";
import { ChatType, ChatsContextType } from "@/types/Chats/types";
import ChatsContext from "@/context/ChatsContext";

const Chats = () => {
  // Get chats from context and destructure them
  const chatsContext = useContext<ChatsContextType>(ChatsContext);
  const { curChats } = chatsContext;
  const allChats = curChats;

  const [currentChats, setCurrentChats] = useState(allChats);

  // Sort chats based on last message timestamp when chats change
  useEffect(() => {
    const newChats = [...curChats];
    newChats.sort((a: ChatType, b: ChatType) => {
      return b.lastMessage - a.lastMessage;
    });
    setCurrentChats(newChats);
  }, [curChats]);

  // Change chats based on input value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newChats = findChatByName(allChats, inputValue);
    setCurrentChats(newChats);
  };
  return (
    <div className={styles.container}>
      <SearchActions
        title="Chats"
        label="Search Chats"
        id="search-chats-input"
        onChange={handleInputChange}
      />
      <ChatList chatsData={currentChats} />
    </div>
  );
};
export default Chats;
