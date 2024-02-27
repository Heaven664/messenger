import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
      // For subsequent requests
      return token;
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
