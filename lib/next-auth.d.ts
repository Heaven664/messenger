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

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
