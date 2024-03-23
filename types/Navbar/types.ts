export type PageStatesType =
  | "chats"
  | "contacts"
  | "settings"
  | "profile"
  | null;

export type NavbarItemType = {
  pageName: PageStatesType;
  layoutType: "topNav" | "botNav";
  component: JSX.Element;
  resetProfile?: boolean;
  newActivity: boolean;
};
