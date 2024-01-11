import { ContactType } from "../Contacts/types";

export type BackgroundProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleLogOut: () => void;
};

export type ProfileType = {
  id: string;
  name: string;
  profileImage: string;
  email: string;
  residency: string;
}
export type ProfileContextType = {
  profileInfo: ContactType;
  handleProfileInfoChange: (profileInfo: ContactType) => void;
};

