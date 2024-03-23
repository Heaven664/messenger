import Settings from "@mui/icons-material/Settings";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import Group from "@mui/icons-material/Group";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import { NavbarItemType } from "@/types/Navbar/types";

export const navItems: NavbarItemType[] = [
  {
    pageName: "profile",
    layoutType: "topNav",
    component: <AccountCircleRounded fontSize="inherit" />,
    resetProfile: true,
    newActivity: false,
  },
  {
    pageName: "contacts",
    layoutType: "topNav",
    component: <Group fontSize="inherit" />,
    newActivity: false,
  },
  {
    pageName: "chats",
    layoutType: "topNav",
    component: <QuestionAnswerOutlined fontSize="inherit" />,
    newActivity: false,
  },
  {
    pageName: "settings",
    layoutType: "botNav",
    component: <Settings fontSize="inherit" />,
    newActivity: false,
  },
];
