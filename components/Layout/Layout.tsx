import Navbar from "../Navbar/NavBar";
import styles from "./Layout.module.scss";
import { LayoutProps } from "@/types/Layout/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
