import { PageStatesType } from "@/types/Navbar/types";
import { createContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { PageContextType } from "@/types/Context/types";

const PageContext = createContext<PageContextType | null>(null);

const PageContextProvider = ({ children }: ComponentProps) => {
  const [curPage, setCurPage] = useState<PageStatesType>("chats");

  const changePage = (value: PageStatesType) => {
    setCurPage(value);
  };

  const context: PageContextType = {
    curPage,
    changePage,
  };

  return (
    <PageContext.Provider value={context}>{children}</PageContext.Provider>
  );
};

export { PageContextProvider };

export default PageContext;
