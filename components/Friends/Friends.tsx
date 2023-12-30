import styles from "@/components/Friends/Friends.module.scss";
import FriendsActions from "./FriendsActions";

export const Friends = () => {
  return (
    <div className={styles.container}>
      <FriendsActions />
    </div>
  );
};

export default Friends;
