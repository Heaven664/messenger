import { AuthContextType } from "@/types/Context/types";
import { ComponentProps } from "@/types/Layout/types";
import { User } from "@/types/User";
import { createContext, useState } from "react";

const authContextTemplate: AuthContextType = {
  user: null,
  login: (userData: User) => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType | null>(authContextTemplate);

const AuthProvider = ({ children }: ComponentProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
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
