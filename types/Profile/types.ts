import { User } from "../User";

export type BackgroundProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleLogOut: () => void;
};

export type ProfileContextType = {
  profileId: string | null;
  handleProfileInfoChange: (profileInfo: string) => void;
};
