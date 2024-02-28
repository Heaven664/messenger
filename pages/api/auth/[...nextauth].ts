import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshToken = async (token: JWT): Promise<JWT> => {
  // Send request to server
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, _) {
        // Check if credentials are provided
        if (!credentials?.email || !credentials?.password) return null;

        const reqBody = {
          email: credentials.email,
          password: credentials.password,
        };

        // Send request to server
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: { "Content-Type": "application/json" },
          }
        );

        // If user is not authenticated
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }

        // Return user
        const user = await res.json();
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // For initial sign in
      if (user) return { ...token, ...user };

      // If tokes in not expired
      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      // If token is expired
      return await refreshToken(token);
    },
    async session({ token, session }) {
      // Add user to session
      if (token.user) {
        session.user = token.user;
        session.backendTokens = token.backendTokens;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export default handler;

export { handler as GET, handler as POST };
