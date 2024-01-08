import { ComponentProps } from "@/types/Layout/types";
import { User, UserContextInterface } from "@/types/User";
import { createContext } from "react";
import { dummyCurrentUser } from "@/dummyCurUser";

const UserContext = createContext<User>(dummyCurrentUser);

const UserContextProvider = ({ children }: ComponentProps) => {
  // Mock current user data
  const context: User = dummyCurrentUser;

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
