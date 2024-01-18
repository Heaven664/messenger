import { ComponentProps } from "@/types/Layout/types";
import { User } from "@/types/User";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<User | null>(null);

const AuthProvider = ({ children }: ComponentProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const context: any = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
