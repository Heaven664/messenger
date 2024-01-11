import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";
import { dummyCurrentUser } from "@/dummyCurUser";
import { ProfileContextType } from "@/types/Profile/types";

const ProfileContext = createContext<ProfileContextType | null>(null);

const ProfileContextProvider = ({ children }: ComponentProps) => {
  const [profileId, setProfileId] = useState(dummyCurrentUser.id);

  const handleProfileInfoChange = (value: string) => {
    setProfileId(value);
  };

  const context: ProfileContextType = {
    profileId,
    handleProfileInfoChange,
  };
  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContextProvider };
export default ProfileContext;
