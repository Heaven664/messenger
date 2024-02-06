import { ComponentProps } from "@/types/Layout/types";
import { createContext, useContext, useState } from "react";
import { ProfileContextType } from "@/types/Profile/types";

const ProfileContext = createContext<ProfileContextType>({
  handleProfileInfoChange: () => {},
  profileId: "",
});

const ProfileContextProvider = ({ children }: ComponentProps) => {
  const [profileId, setProfileId] = useState<string | null>(null);

  // Change profile data to be displayed
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
