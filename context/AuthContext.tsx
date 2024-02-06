import { AuthContextType } from "@/types/Context/types";
import { ComponentProps } from "@/types/Layout/types";
import { User } from "@/types/User";
import { createContext, useContext, useState } from "react";
import ProfileContext from "./ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";

const authContextTemplate: AuthContextType = {
  user: null,
  login: (userData: User) => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(authContextTemplate);

const AuthProvider = ({ children }: ComponentProps) => {
  const profileIdContext = useContext(ProfileContext);
  const { handleProfileInfoChange } = profileIdContext as ProfileContextType;
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    console.log(userData.id);
    setUser(userData);
    handleProfileInfoChange(userData.id);
  };

  const logout = () => {
    setUser(null);
  };

  const context: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthProvider };
