import { useContext, useEffect } from "react";
import { ComponentProps } from "@/types/Layout/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { User } from "@/types/User";
import ChatApp from "./ChatApp";

const Layout = ({ children }: ComponentProps) => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;
  const router = useRouter();

  // Get authenticated user data from session
  const session = useSession().data!;
  const user = session?.user as User;

  const isAuthPage = router.pathname.includes("/auth");

  // Redirect if user is not authenticated, only on the client side
  useEffect(() => {
    if (!user && window && !isAuthPage) {
      router.push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAuthPage]);

  if (user && isAuthPage) router.push("/");

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (user) {
    return (
      <ChatApp chatWindowSelected={chatWindowSelected}>{children}</ChatApp>
    );
  }
};

export default Layout;
