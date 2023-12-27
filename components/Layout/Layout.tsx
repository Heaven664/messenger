import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavbarDesktop />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
