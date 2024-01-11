import { ComponentProps } from "@/types/Layout/types";
import { createContext } from "react";
import { dummyCurrentUser } from "@/dummyCurUser";
import { ContactType } from "@/types/Contacts/types";

const UserContext = createContext<ContactType>(dummyCurrentUser);

const UserContextProvider = ({ children }: ComponentProps) => {
  // Mock current user data
  const context: ContactType = dummyCurrentUser;

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
