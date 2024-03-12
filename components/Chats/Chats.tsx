import { useContext, useEffect, useState } from "react";
import SearchActions from "../General/SearchActions";
import ChatList from "./ChatList";
import styles from "./Chats.module.scss";
import { findChatByName } from "@/helpers/General";
import { ChatType, ChatsContextType } from "@/types/Chats/types";
import ChatsContext from "@/context/ChatsContext";
import { useSession } from "next-auth/react";
import getChats from "@/helpers/Api/getChats";

const Chats = () => {
  // Get chats from context and destructure them
  const chatsContext = useContext<ChatsContextType>(ChatsContext);
  const { allChats, handleChatsChange } = chatsContext;

  const session = useSession();
  const userEmail = session.data!.user!.email;

  const [currentChats, setCurrentChats] = useState(allChats || []);

  useEffect(() => {
    getChats(userEmail)
      .then((data) => {
        return handleChatsChange(data.response);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  // Sort chats based on last message timestamp when chats change
  useEffect(() => {
    const newChats = [...allChats];
    newChats.sort((a: ChatType, b: ChatType) => {
      return b.lastMessage - a.lastMessage;
    });
    setCurrentChats(newChats);
  }, [allChats]);

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
