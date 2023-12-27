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
import { useState } from "react";

// Setting up color for active Navigation Icon
const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  "&.Mui-selected": {
    color: "#4A9A64",
  },
}));

const NavbarMobile = () => {
  const [value, setValue] = useState<NavbarAction>(null);

  return (
    <div className={styles.container}>
      <BottomNavigation
        sx={{
          backgroundColor: "#2E2E2E",
          width: "100%",
        }}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
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
