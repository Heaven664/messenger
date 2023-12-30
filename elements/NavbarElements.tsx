import {
  AccountCircleRounded,
  Group,
  QuestionAnswerOutlined,
  Settings,
} from "@mui/icons-material";

export const topNavItems = [
  {
    pageName: "profile",
    component: <AccountCircleRounded fontSize="inherit" />,
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
