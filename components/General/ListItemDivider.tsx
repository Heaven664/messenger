import Divider from "@mui/material/Divider";
import styles from "./ListItemDivider.module.scss";
import { DividerPropsInterface } from "@/types/General/types";

const ListItemDivider = ({ letter }: DividerPropsInterface) => {
  return (
    <div className={styles.container}>
      <h1>{letter}</h1>
      <Divider />
    </div>
  );
};

export default ListItemDivider;
