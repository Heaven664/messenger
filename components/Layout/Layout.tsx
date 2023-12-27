import NavbarDesktop from "../Navbar/NavbarDesktop";
import NavbarMobile from "../Navbar/NavbarMobile";
import styles from "./Layout.module.scss";
import { LayoutProps } from "@/types/Layout/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavbarMobile />
      <NavbarDesktop />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
