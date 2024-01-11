import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";
import { dummyCurrentUser } from "@/dummyCurUser";
import { ProfileContextType } from "@/types/Profile/types";
import { ContactType } from "@/types/Contacts/types";

const ProfileContext = createContext<ProfileContextType | null>(null);

const ProfileContextProvider = ({ children }: ComponentProps) => {
  const [profileInfo, setProfileInfo] = useState<ContactType>(dummyCurrentUser);

  const handleProfileInfoChange = (value: ContactType) => {
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
