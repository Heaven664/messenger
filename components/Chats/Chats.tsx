import { useState } from "react";
import SearchActions from "../General/SearchActions";
import ChatList from "./ChatList";
import styles from "./Chats.module.scss";
import { dummyChats } from "@/dummyChats";
import { findChatByName } from "@/helpers/General";
import { ChatType } from "@/types/Chats/types";

const Chats = () => {
  const allChats = dummyChats;

  // Sort Chats based on last message timestamp
  allChats.sort((a: ChatType, b: ChatType) => {
    return b.lastMessage - a.lastMessage;
  });
  
  const [currentChats, setCurrentChats] = useState(allChats);

  // Change chats based on input value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newChats = findChatByName(dummyChats, inputValue);
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
