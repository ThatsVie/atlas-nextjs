import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { fetchUser } from "@/lib/data";
import bcrypt from "bcryptjs";

export const { handlers, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { prompt: "consent" } },
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Email and Password required.");
        }

        const user = await fetchUser(credentials.email.trim());

        if (!user || !user.password || typeof user.password !== "string") {
          throw new Error("Invalid credentials.");
        }

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordsMatch) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: null,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ account }) {
      return !!account;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name ?? "",
          email: token.email ?? "",
          emailVerified: null,
        };
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  debug: true,
});
