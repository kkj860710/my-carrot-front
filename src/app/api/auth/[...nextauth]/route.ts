import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

/**
 * NextAuthOptions 설정
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Input UserName" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const {data, status} = await axios.post(process.env.NEXT_PUBLIC_API + 'user/sign-in', {
          userLoginId: credentials?.username,
          userPassword: credentials?.password
        })
        let user;
        if( status === 200 || status === 201) {
          delete data.userPassword;
          user = data;
        } else {
          user = null;
        }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 30 & 24 * 60 * 60,   // 30일 기한 설정
  },
  pages : {
    signIn: "/app/auth/sign-in"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      session.user = token
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return {...token, ...user}
    },
}};

/**
 * NextAuth 핸들러
 */
const handler = NextAuth(authOptions);

// Next.js App Router에서
// GET, POST 두 HTTP 메서드를 export
export { handler as GET, handler as POST };
