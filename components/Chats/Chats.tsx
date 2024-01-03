import SearchActions from "../General/SearchActions";
import ChatList from "./ChatList";
import styles from "./Chats.module.scss";
import { dummyChats } from "@/dummyChats";

const Chats = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className={styles.container}>
      <SearchActions
        title="Chats"
        label="Search Chats"
        id="search-chats-input"
        onChange={handleInputChange}
      />
      <ChatList chatsData={dummyChats} />
    </div>
  );
};
export default Chats;
