import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";
import { dummyCurrentUser } from "@/dummyCurUser";
import { User } from "@/types/User";
import { ProfileContextType } from "@/types/Profile/types";

const ProfileContext = createContext<ProfileContextType | null>(null);

const ProfileContextProvider = ({ children }: ComponentProps) => {
  const [profileInfo, setProfileInfo] = useState<User>(dummyCurrentUser);

  const handleProfileInfoChange = (value: User) => {
    setProfileInfo(value);
  };

  const context: ProfileContextType = {
    profileInfo,
    handleProfileInfoChange,
  };
  return (
    <ProfileContext.Provider value={context}>{children}</ProfileContext.Provider>
  );
};

export { ProfileContextProvider };
export default ProfileContext;
