import Settings from "@mui/icons-material/Settings";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import Group from "@mui/icons-material/Group";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";

export const topNavItems = [
  {
    pageName: "profile",
    component: <AccountCircleRounded fontSize="inherit" />,
    resetProfile: true,
  },
  {
    pageName: "contacts",
    component: <Group fontSize="inherit" />,
  },
  {
    pageName: "chats",
    component: <QuestionAnswerOutlined fontSize="inherit" />,
  },
];

export const bottomNavItems = [
  {
    pageName: "settings",
    component: <Settings fontSize="inherit" />,
  },
];
