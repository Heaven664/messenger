import SearchActions from "../General/SearchActions";
import ChatListItem from "./ChatListItem";
import styles from "./Chats.module.scss";

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
      <ChatListItem />
      <ChatListItem />
    </div>
  );
};
export default Chats;
