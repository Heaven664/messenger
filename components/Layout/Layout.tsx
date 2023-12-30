import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavbarDesktop />
      {children}
    </div>
  );
};

export default Layout;
