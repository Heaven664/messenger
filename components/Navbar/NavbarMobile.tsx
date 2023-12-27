import { styled } from "@mui/material/styles";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  QuestionAnswerOutlined,
  Group,
  Settings,
  AccountCircleRounded,
} from "@mui/icons-material/";
import { NavbarAction } from "@/types/Navbar/types";
import styles from "./NavbarMobile.module.scss";
import { useContext } from "react";
import PageContext from "@/context/PageContext";
import { PageContextType } from "@/types/Context/types";

// Setting up color for active Navigation Icon
const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  "&.Mui-selected": {
    color: "#4A9A64",
  },
}));

const NavbarMobile = () => {
  const pageContext = useContext<PageContextType | null>(PageContext);
  const { curPage, changePage } = pageContext as PageContextType;

  return (
    <div className={styles.container}>
      <BottomNavigation
        sx={{
          backgroundColor: "#2E2E2E",
          width: "100%",
        }}
        value={curPage}
        onChange={(event, newValue) => changePage(newValue)}
      >
        <StyledBottomNavigationAction
          disableRipple={true}
          value="settings"
          icon={<Settings />}
          sx={{ color: "#878A92" }}
        />
        <StyledBottomNavigationAction
          disableRipple={true}
          value="chats"
          icon={<QuestionAnswerOutlined />}
          sx={{ color: "#878A92" }}
        />
        <StyledBottomNavigationAction
          disableRipple={true}
          value="friends"
          icon={<Group />}
          sx={{ color: "#878A92" }}
        />
        <StyledBottomNavigationAction
          disableRipple={true}
          value="profile"
          icon={<AccountCircleRounded />}
          sx={{ color: "#878A92" }}
        />
      </BottomNavigation>
    </div>
  );
};

export default NavbarMobile;
