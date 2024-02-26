import { User } from "@/types/User";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: User;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
