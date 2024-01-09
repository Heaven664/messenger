import { PageStatesType } from "@/types/Navbar/types";
import { createContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { PageContextType } from "@/types/Context/types";
import { useRouter } from "next/router";

const PageContext = createContext<PageContextType | null>(null);

const PageContextProvider = ({ children }: ComponentProps) => {
  const router = useRouter();
  const firstPage = router.pathname.slice(1);
  const [curPage, setCurPage] = useState<PageStatesType>(firstPage as PageStatesType);

  const changePage = (value: PageStatesType) => {
    router.push(`/${value}`);
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
